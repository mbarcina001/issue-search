/* ACTIONS */
import { createAction, props } from '@ngrx/store';
import { Issue } from '../models/issue.model';

export const getIssueList = createAction('[Issue] Get Issue List', props<{repo: string}>());
export const getIssueListSuccess = createAction('[Issue] Get Issue List Success', props<{issueList: Issue[]}>());
export const getIssueListFail = createAction('[Issue] Get Issue List Fail', props<{error: string}>());
