import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "richie-popup",
  templateUrl: "./richie-popup.component.html",
  styleUrls: ["./richie-popup.component.scss"]
})
export class RichiePopupComponent {
  @Input() header: string;
  @Input() opened: boolean = true;
  @Output() close = new EventEmitter<boolean>();

  /*
   *  Had to be added as hammer.js somehow doesnt support ev.preventPropagation()
   *  As soon as functions exists and works, this will be removed.
   */

  public lastClick: number = this.getCurrentTime();

  public updateLastClick(): void {
    this.lastClick = this.getCurrentTime();
  }
  public getCurrentTime(): number {
    return new Date().getTime();
  }

  public _close(): void {
    this.opened = false;
    this.close.emit(this.opened);
  }

  public cardClicked(): void {
    this.updateLastClick();
  }

  public bgClicked(): void {
    setTimeout(() => {
      if (Math.abs(this.lastClick - this.getCurrentTime()) < 20) return;
      this._close();
    }, 10);
    return;
  }
}
