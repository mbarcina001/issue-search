import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getIssueList } from '../../store/actions/issue.actions';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../layout/dialog/dialog.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() eg: string;

  issueList$ = this.store.select(state => state.issue.issueList);
  isLoading$ = this.store.select(state => state.issue.loading);
  errorMessage$ = this.store.select(state => state.issue.error);

  constructor(private store: Store<any>, private dialog: MatDialog){ }

  ngOnInit() {
    this.errorMessage$
      .subscribe(error => {
        if(error!=""){
          this.dialog.open(DialogComponent,{
            data:{
              message: error,
              buttonText: {
                cancel: 'Ok'
              }
            },
          });
        }
      });
  }

  public search(myForm: NgForm){
    var data = myForm.value;
    if (myForm.valid) {
      this.store.dispatch(getIssueList({repo: data.repo}));
    }else{
			/* Show errores */
			for(let i in myForm.controls){
					myForm.controls[i].updateValueAndValidity();
					myForm.controls[i].markAsTouched();
			}
		}    
  }

}

