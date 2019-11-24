import { Component, OnInit } from "@angular/core";

@Component({
  selector: "richie-pwa-notifier",
  templateUrl: "./richie-pwa-notifier.component.html",
  styleUrls: ["./richie-pwa-notifier.component.scss"]
})
export class RichiePwaNotifierComponent implements OnInit {
  constructor() {}

  public message: string = "N/A";

  ngOnInit() {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      // do things here
      // set a variable to be used when calling something
      // e.g. call Google Analytics to track standalone use
      this.message = "It is a PWA";
    } else {
      this.message = "Not as PWA";
    }
  }
}
