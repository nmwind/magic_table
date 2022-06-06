import { InjectionToken } from "@angular/core";
import { SocketIoConfig } from "ngx-socket-io/src/config/socket-io.config";
import { environment } from "src/environments/environment";

// export const socketIoConfig: InjectionToken<SocketIoConfig> = new InjectionToken('esp32-magic', {
//         factory: ()=><SocketIoConfig>{
//             path:"/ws",
//             reconnection: true
//         }
// });
export const wsConfig: SocketIoConfig = {
  url: environment.espWsUrl,
  options: {
    autoConnect: false,
    path: "/ws",
    
    reconnection: false,
    protocols: "arduino",
    transports: ["websocket"],
  },
};
