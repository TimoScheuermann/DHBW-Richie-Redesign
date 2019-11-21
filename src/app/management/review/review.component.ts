import { Component, OnInit } from "@angular/core";
import { NotificationType } from "src/app/models/notificationTyp.enum";
import { Question } from "src/app/models/question.model";
import { QuestionService } from "src/app/question/question.service";
import { NotificationService } from "src/app/shared/notification.service";
@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.scss"]
})
export class ReviewComponent implements OnInit {
  constructor(
    private notificationService: NotificationService,
    private questionService: QuestionService
  ) {
    this.filters = ["new", "feedback", "delete"];
    this.filterList = [...this.filters];
  }

  public opened: boolean = false;
  public filters: String[] = [];
  public filterList: String[] = [];
  public currentQuestion: Question = { status: "new" } as Question;
  public questions: Question[] = [];

  ngOnInit(): void {
    // TODO: READD
    // this.getUnansweredQuestions();
    this.questions.push({ status: this.filters[0] } as Question);
    this.questions.push({ status: this.filters[1] } as Question);
    this.questions.push({ status: this.filters[1] } as Question);
    this.questions.push({ status: this.filters[2] } as Question);
    this.questions.push({ status: this.filters[0] } as Question);
    this.questions.push({ status: this.filters[2] } as Question);
    this.questions.push({ status: this.filters[1] } as Question);
  }

  public getFilteredQuestions(): Question[] {
    return this.questions.filter(x => this.isFilterActive(x.status));
  }

  public toggleFilter(filter) {
    if (this.isFilterActive(filter)) {
      var index = this.filterList.indexOf(filter);
      if (index > -1) {
        this.filterList.splice(index, 1);
      }
      return;
    }
    this.filterList.push(filter);
  }

  public isFilterActive(filter): boolean {
    return this.filterList.includes(filter);
  }

  public getAmountOfX(of): number {
    return this.questions.filter(x => x.status == of).length;
  }

  public acceptQuestion(): void {
    this.opened = false;
    this.notificationService.sendNotification(
      "Frage wurde eingetragen",
      NotificationType.SUCCESS
    );
  }

  public deleteQuestion(): void {
    this.opened = false;
    this.notificationService.sendNotification(
      "Frage wurde gelöscht",
      NotificationType.ERROR
    );
  }

  async getUnansweredQuestions(): Promise<void> {
    this.questions = await this.questionService.getQuestionsInReviewState();
  }
}
