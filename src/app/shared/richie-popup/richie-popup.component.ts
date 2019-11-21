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

  public _close(): void {
    this.opened = false;
    this.close.emit(this.opened);
  }
}
