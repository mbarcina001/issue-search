import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { IssueService } from '../services/issue.service';
import { getIssueList, getIssueListSuccess, getIssueListFail } from '../actions/issue.actions';
import { Issue } from '../models/issue.model';

@Injectable()
export class IssueEffects {

    @Effect()
    loadIssues$ = this.actions$.pipe(
      ofType(getIssueList),
      mergeMap((action) => this.issueService.getIssueList(action.repo)
        .pipe(
          map((res: any[]) => {
            let issueList: Issue[] = [];
            for(let elem of res){
              issueList.push(
                new Issue(
                  elem.title,
                  elem.created_at,
                  elem.user.login,
                  elem.html_url
                )
              );
            }
            if(issueList.length>0){
              return getIssueListSuccess({ issueList: issueList })
            }else{
              return getIssueListFail({ error: "Search did not return any result"})
            }
          }),
          catchError((error) => {
            return of(getIssueListFail({ error: error.message})) 
          })
        )
      )
    );

    constructor(private actions$: Actions, private issueService: IssueService) {}
}