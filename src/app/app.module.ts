import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IssueEffects } from './store/effects/issue.effect';
import { EffectsModule } from '@ngrx/effects';
import { IssueService } from './store/services/issue.service';
import { AppComponent } from './app.component';
import { HttpClientModule, } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS, metaReducers } from './store/reducers';
import { IssueComponent } from './components/issue/issue.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldErrorComponent } from './components/field-error/field-error.component';
import { DialogComponent } from './components/layout/dialog/dialog.component';


const MaterialComponents = [
  MatProgressSpinnerModule,
  MatDialogModule
] 

@NgModule({
  declarations: [
    AppComponent,
    IssueComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    FieldErrorComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(ROOT_REDUCERS, {metaReducers}),
    EffectsModule.forRoot([IssueEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MaterialComponents,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    IssueService,
    ErrorHandler,
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent],
})
export class AppModule {}
