import { MediaMatcher } from "@angular/cdk/layout";

import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from "@angular/core";
import { WebControllerService } from "./services/web-controller.service";
import {
  IEffectInfo,
  EffectsData,
  LedInfoData,
  NextCommand,
  StartCommand,
  StopCommand,
  SubscriptionCommand,
  StateData,
  GetEffectsCommand,
} from "./models/web-controller";
import { LedInfoComponent } from "./components/led-info/led-info.component";
import { Observable, of, switchMap } from "rxjs";
import { MatToolbarRow } from "@angular/material/toolbar";
import { MatButton } from "@angular/material/button";
@Component({
  selector: "esp-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
})
export class AppComponent implements OnDestroy {
  private _ledInfoDataShow: boolean = false;
  private _mobileQueryListener: () => void;

  @ViewChild("ledInfo")
  public LedInfo!: LedInfoComponent;
  @ViewChild("toolbarRowInfo")
  private toolBarRowInfo!: ElementRef;

  public effects: IEffectInfo[] = [];
  public selectedEffect?: IEffectInfo;
  public connected: boolean = false;
  public isRun: boolean = false;

  public mobileQuery: MediaQueryList;

  constructor(public controller: WebControllerService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    //this.controller.Connect();
    this.controller.OnData(EffectsData, (data) => {
      this.effects = data.Effects;
      this.selectedEffect = this.effects[0];
      changeDetectorRef.detectChanges();
    });

    this.controller.OnData(StateData, (data) => {
      this.isRun = data.IsRun;
      this.selectedEffect = this.effects.find((effect, index) => effect.Order == data.EffectIndex);
      changeDetectorRef.detectChanges();
    });

    // this.controller.isConnected$.pipe(
    //   switchMap((status) => {
    //     debugger
    //     this.connected = status;
    //     if (status && this.effects.length == 0) {
    //       this.controller.Send(new GetEffectsCommand());
    //     }
    //     return of(status);
    //   })
    // );
    this.controller.isConnected$.subscribe((status) => {
      this.connected = status;
      if (status && this.effects.length == 0) {
        this.controller.Send(new GetEffectsCommand());
      }
    });
  }

  public prevClick() {}

  public startClick() {
    if (this.connected) {
      if (!this.isRun && this.selectedEffect != undefined) {
        this.controller.Send(new StartCommand(this.selectedEffect.Name));
      } else if (this.isRun) {
        this.controller.Send(new StopCommand());
      }
    }
  }

  public nextClick() {}

  public infoClick(button: MatButton) {
    this._ledInfoDataShow = !this._ledInfoDataShow;
    this.subscriptionInfo(this._ledInfoDataShow);
    this.toolBarRowInfo.nativeElement.style.display = !this._ledInfoDataShow ? "none" : "block";
    button.color = this._ledInfoDataShow ? "accent" : undefined;
  }

  public settingsClick() {}

  public subscriptionInfo(enabled: boolean) {
    if (enabled) {
      this.LedInfo.Info = this.controller.Subscribe<LedInfoData>(LedInfoData);
    } else {
      this.controller.Unsubscribe<LedInfoData>(LedInfoData);
    }
  }

  OnSelectedEffectClick(effect: IEffectInfo) {
    if (this.selectedEffect != effect) {
      if (this.connected && this.isRun) {
        this.controller.Send(new StartCommand(effect.Name));
      }
      
      this.selectedEffect = effect;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
