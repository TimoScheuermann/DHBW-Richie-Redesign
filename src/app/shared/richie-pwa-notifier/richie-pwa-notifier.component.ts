import { Component } from "@angular/core";

@Component({
  selector: "richie-pwa-notifier",
  templateUrl: "./richie-pwa-notifier.component.html",
  styleUrls: ["./richie-pwa-notifier.component.scss"]
})
export class RichiePwaNotifierComponent {
  constructor() {
    // TODO: readd
    // this.opened = !this.isInStandaloneMode();
  }

  public opened: boolean = false;

  public isInStandaloneMode(): boolean {
    return (
      window.matchMedia("(display-mode: standalone)").matches || // Desktop
      window.navigator["standalone"] || // iOS
      document.referrer.includes("android-app://") // Android App
    );
  }
}
