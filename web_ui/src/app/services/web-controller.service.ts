import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
//import { Socket } from "ngx-socket-io";
import { from, Observable, Subscription, SubscriptionLike, throwError } from "rxjs";
import { catchError, distinctUntilChanged, retry, share } from "rxjs/operators";

import {WsCommand, WsData, SubscriptionCommand, LedInfoData } from "../models/web-controller";
import { WebSocketService } from "./web-socket.service";

type Trim<T> = T extends `${infer U}${"Package"}` ? Trim<U> : T;
// type ClassName<T class> = T.construct.name;
// type GetPackageId<T extends WsPackage> =
// type Trim<T> = T extends `${Package}${infer U}`
//   ? Trim<U>
//   : T extends `${infer U}${Package}`
//   ? Trim<U>
//   : T;

interface SubscribedData {
  Status: boolean;
  Observable: Observable<any>;
}

@Injectable({
  providedIn: "root",
})
export class WebControllerService {
  private _subscriptions = new Map<string, SubscribedData>();

  constructor(private _http: HttpClient, private _wsService: WebSocketService) {
  }

  public get isConnected$(): Observable<boolean> {
    return this._wsService.status;
  }

  public SubscribedData$(type: typeof WsData): Observable<any> | undefined {
    return this._subscriptions.get(type.name)?.Observable;
  }

  // public OnCommand<T extends WsCommand>(type: { new (...args: []): T }): Observable<T> | undefined;
  public OnCommand<T extends WsCommand>(type: { new (...args: []): T }, callback: (cmd: T) => void): void {
    const command = type.name;

    if (callback !== undefined) {
      const sub = this._wsService.on<T>(command).subscribe(callback);
      return;
    }

    // return this._wsService.on<T>(command);
  }

  public OnData<T extends WsData>(type: { new (...args: []): T }, callback: (data: T) => void): void {
    const command = type.name;

    if (callback !== undefined) {
      const sub = this._wsService.on<T>(command).subscribe(callback);
      return;
    }

    // return this._wsService.on<T>(command);
  }

  public Send(command: WsCommand): void;
  public Send<TCmd extends WsCommand>(command: TCmd): void {
    let data = <any>command;
    delete data.event;
    this._wsService.send(command.constructor.name, data);
  }

  // public Connect(): void {
  //   this._wsService.connect();
  // }

  public Subscribe<TData extends WsData>(type: { new (...args: []): TData }): Observable<TData> {
    this.Send(new SubscriptionCommand(true, type));

    if (!this._subscriptions.has(type.name)) {
      this._subscriptions.set(type.name, {
        Status: true,
        Observable: this._wsService.on<TData>(type.name).pipe(share()),
      });
    } else {
      const sub = this._subscriptions.get(type.name)!;
      sub.Status = true;
    }

    return this._subscriptions.get(type.name)!.Observable;
  }

  public Unsubscribe<TData extends WsData>(type: { new (...args: []): TData }): void {
    this.Send(new SubscriptionCommand(false, type));

    const sub: SubscribedData | undefined = this._subscriptions.get(type.name);
    if (sub?.Status) {
      sub.Status = false;
    }
  }
}
