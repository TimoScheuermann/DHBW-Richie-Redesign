import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "richie-header",
  templateUrl: "./richie-header.component.html",
  styleUrls: ["./richie-header.component.scss"]
})
export class RichieHeaderComponent {
  constructor(
    public readonly userService: UserService,
    private readonly router: Router
  ) {
    router.events.subscribe(() => {
      this.isNavVisible = false;
    });
  }

  public isNavVisible: boolean = false;
  public toggleNav(): void {
    this.isNavVisible = !this.isNavVisible;
  }
}
