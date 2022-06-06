import { inject, InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { WebSocketService } from "../services/web-socket.service";

// export const WEBSOCKET_SERVICE_TOKEN = new InjectionToken<WebSocketService>("Web Socket Service", {
//   providedIn: "root",
//   factory: ()=> new WebSocketService(inject(WebSocketConfig));
// });

export interface IWebSocketService {
  on<T extends IWsMessage>(event: string): Observable<T>;
  send(event: string, data: any): void;
  status: Observable<boolean>;
}

export interface WebSocketConfig {
  url: string;
  reconnectInterval?: number;
  reconnectAttempts?: number;
}

export interface IWsMessage {
  event: string;
}
