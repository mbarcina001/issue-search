import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getIssueList } from './store/actions/issue.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  private repo: string = "";

  issueList$ = this.store.select(state => state.issue.issueList);
  isLoading$ = this.store.select(state => state.issue.loading);

  constructor(private store: Store<any>){ }

  public search(){
    console.log("Search: " + this.repo);
    this.store.dispatch(getIssueList({repo: this.repo}));
  }

}
