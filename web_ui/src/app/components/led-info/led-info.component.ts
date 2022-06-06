import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { ILedInfo } from "src/app/models/web-controller";

@Component({
  selector: "esp-led-info",
  templateUrl: "led-info.component.html",
  styleUrls: ["led-info.component.css"],
})
export class LedInfoComponent implements OnInit, OnDestroy {
  @Input()
  public Info?: Observable<ILedInfo> | undefined;
  // private _info: BehaviorSubject<any> = new BehaviorSubject({});
  // public info$: Observable<ILedInfo> = this._info.asObservable();

  constructor() {
    // this._info = new BehaviorSubject(<ILedInfo>{
    //   NumberLeds: 0,
    //   CurrentBrightness: 0,
    //   CurrentMaxBrightness: 0,
    //   CurrentPowerAtMaxBrightness: 0,
    //   Fps: 0,
    // });
    // this.info$ = this._info.asObservable();
  }

  // public setInfo(info: ILedInfo): void {
  //   console.log("====", info);
  //   this._info.next(info);
  // }

  ngOnInit() {
    console.log("LedInfoComponent OnInit");
  }

  ngOnDestroy(): void {
    console.log("LedInfoComponent OnDestroy");
    // this._info.unsubscribe();
  }
}
