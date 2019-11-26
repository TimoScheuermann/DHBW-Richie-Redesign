import { Component } from "@angular/core";

@Component({
  selector: "richie-footer",
  templateUrl: "./richie-footer.component.html",
  styleUrls: ["./richie-footer.component.scss"]
})
export class RichieFooterComponent {
  constructor() {}

  currYear: number = new Date().getFullYear();
}
