import { Injectable, OnDestroy, Inject } from "@angular/core";
import { Observable, SubscriptionLike, Subject, Observer, interval } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { WebSocketSubject, WebSocketSubjectConfig } from "rxjs/webSocket";

import { share, distinctUntilChanged, takeWhile } from "rxjs/operators";
import { IWebSocketService, IWsMessage, WebSocketConfig } from "../models/web-socket";
import { environment } from "src/environments/environment";

// import { WEBSOCKET_SERVICE_TOKEN } from "../models/web-socket";

@Injectable({
  providedIn: "root",
})
export class WebSocketService implements IWebSocketService, OnDestroy {
  private config: WebSocketSubjectConfig<IWsMessage>;

  private websocketSub: SubscriptionLike;
  private statusSub: SubscriptionLike;

  private reconnection$: Observable<number> | null = null;
  private websocket$: WebSocketSubject<IWsMessage> | null = null;
  private connection$!: Observer<boolean>;
  private wsMessages$: Subject<IWsMessage>;

  private reconnectInterval: number;
  private reconnectAttempts: number;
  private isConnected: boolean = false;

  public status: Observable<boolean>;

  constructor() {
    //@Inject(WEBSOCKET_SERVICE_TOKEN) private wsConfig: WebSocketConfig
    const wsConfig = <WebSocketConfig>{
      url: environment.espWsUrl,
    };
    this.wsMessages$ = new Subject<IWsMessage>();

    this.reconnectInterval = wsConfig.reconnectInterval || 5000; // pause between connections
    this.reconnectAttempts = wsConfig.reconnectAttempts || 10; // number of connection attempts

    this.config = {
      url: wsConfig.url,
      protocol: "arduino",
      binaryType: "arraybuffer",
      closeObserver: {
        next: (event: CloseEvent) => {
          this.websocket$ = null;
          console.log("WebSocket disconnected:(");
          this.connection$.next(false);
        },
      },
      openObserver: {
        next: (event: Event) => {
          console.log("WebSocket connected!");
          this.connection$.next(true);
        },
      },
    };

    // connection status
    this.status = new Observable<boolean>((observer) => {
      this.connection$ = observer;
    }).pipe(share(), distinctUntilChanged());

    // run reconnect if not connection
    this.statusSub = this.status.subscribe((isConnected) => {
      this.isConnected = isConnected;

      if (!this.reconnection$ && typeof isConnected === "boolean" && !isConnected) {
        this.reconnect();
      }
    });

    this.websocketSub = this.wsMessages$.subscribe(null, (error: ErrorEvent) =>
      console.error("WebSocket error!", error)
    );

    this.connect();
  }

  ngOnDestroy() {
    this.websocketSub.unsubscribe();
    this.statusSub.unsubscribe();
  }

  public connect(): void {
    this.websocket$ = new WebSocketSubject(this.config);

    this.websocket$.subscribe({
      next: (message) => this.wsMessages$.next(message),
      error: (error: Event) => {
        if (!this.websocket$) {
          // run reconnect if errors
          this.reconnect();
        }
      },
    });
  }

  public disconnect(): void {
    if (this.websocket$) {
      this.websocket$.complete();
    }
  }

  private reconnect(): void {
    this.reconnection$ = interval(this.reconnectInterval).pipe(
      takeWhile((v, index) => (this.reconnectAttempts === -1 || index < this.reconnectAttempts) && !this.websocket$)
    );

    this.reconnection$.subscribe({
      next: () => this.connect(),
      complete: () => {
        // Subject complete if reconnect attemts ending
        this.reconnection$ = null;

        if (!this.websocket$) {
          this.wsMessages$.complete();
          this.connection$.complete();
        }
      },
    });
  }

  public on<T extends IWsMessage>(event: string): Observable<T> {
    // console.log("on:", event, "data: ", (<any>event).data);
    if (event) {
      return this.wsMessages$.pipe(
        filter((message: IWsMessage) => message.event === event),
        //tap((message:IWsMessage) => console.log(message)),
        map((message: IWsMessage) => <T>(<any>message).data)
      );
    } else {
      throw "event must be setted";
    }
  }

  /*
   * on message to server
   * */
  public send(event: string, data: any = {}): void {
    if (event && this.isConnected) {
      // const json = JSON.stringify({ event, data });
      // console.log(json);
      //this.websocket$!.next(json);
      const msg = <IWsMessage>{ event, data };
      console.log("ws send: ", msg);
      this.websocket$!.next(msg);
    } else {
      console.error("Send error!");
    }
  }
}
