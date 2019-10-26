import {Action, createReducer, on } from '@ngrx/store';

import * as IssueActions from '../actions/issue.actions';
import { Issue } from '../models/issue.model';

export interface State {
	loading: boolean;
	repo: string;
	issueList: Issue[];
	error: string;
};

export const initialState: State = {
	loading: false,
	repo: '',
	issueList: [],
	error: ''
};

const issueReducer = createReducer(
	initialState,
	on(IssueActions.getIssueList, (state, { repo }) => ({ ...state, loading: true, repo: repo , error: ''})),
	on(IssueActions.getIssueListSuccess, (state, { issueList }) => ({ ...state, loading: false, issueList: issueList })),
	on(IssueActions.getIssueListFail, (state, { error }) => ({ ...state, loading: false, error: error })),
);

export function reducer(state: State | undefined, action: Action) {
	return issueReducer(state, action);
}