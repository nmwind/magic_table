import { IWsMessage } from "./web-socket";

export interface IStateInfo {
  EffectIndex: number;
  IsRun: boolean;
}

export interface IEffectInfo {
  Order: number;
  Name: string;
}

export interface ILedInfo {
  NumberLeds: Number;
  CurrentMaxBrightness: Number;
  CurrentPowerAtMaxBrightness: Number;
  CurrentBrightness: Number;
  Fps: Number;
}

// export enum WsCommands {
//   Start = "Start",
//   Stop = "Stop",
//   Next = "Next",
//   Prev = "Prev",
// }

export class WsCommand implements IWsMessage {
  readonly event: string = this.constructor.name;
}

export class WsData implements IWsMessage {
  readonly event: string = this.constructor.name;
}

export class StartCommand extends WsCommand {
  constructor(public Name: String | undefined = undefined) {
    super();
  }
}

export class StopCommand extends WsCommand {}

export class NextCommand extends WsCommand {}

export class PrevCommand extends WsCommand {}

export class GetEffectsCommand extends WsCommand {}

export class SubscriptionCommand extends WsCommand {
  public Type: String;
  constructor(public Enabled: boolean, type: typeof WsData) {
    super();
    this.Type = type.name;
  }
}



export class LedInfoData extends WsData implements ILedInfo {
  public NumberLeds!: Number;
  public CurrentMaxBrightness!: Number;
  public CurrentPowerAtMaxBrightness!: Number;
  public CurrentBrightness!: Number;
  public Fps!: Number;
}

export class EffectsData extends WsData {
  public Effects!: IEffectInfo[];
}

export class StateData extends WsData implements IStateInfo {
  public EffectIndex!: number;
  public IsRun!: boolean;
}
