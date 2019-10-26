import { Component, OnInit, Input } from '@angular/core';
import { Issue } from 'src/app/store/models/issue.model';
import { Observable, BehaviorSubject } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {

  private _issue = new BehaviorSubject<Issue>(null);
  private daysPassed: string;

    @Input()
    set issue(value) {
        this._issue.next(value);
    };

    get issue() {
        return this._issue.getValue();
    }

    ngOnInit() {
      this._issue.subscribe(x => {
        this.daysPassed = moment(this.issue.createdAt).startOf('day').fromNow();
        console.log(this.daysPassed)
      });
    }

}
