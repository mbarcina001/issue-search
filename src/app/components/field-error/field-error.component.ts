import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss']
})
export class FieldErrorComponent{

  private static readonly errorMessages = {
    'required': () => 'Field is mandatory.',
    'pattern': (params) => 'Value is not correct.',
  };

  @Input()
 private control: AbstractControlDirective | AbstractControl;

 constructor(){}

 shouldShowErrors(): boolean {
  return this.control &&
    this.control.errors &&
    (this.control.dirty);
 }

 /* Salta una vez por cada error de cada campo */
 listOfErrors(): string[] {
   return Object.keys(this.control.errors)
     .map(field => this.getMessage(field, this.control.errors[field]));
 }

 private getMessage(type: string, params: any) {
   return FieldErrorComponent.errorMessages[type](params);
 }

}
