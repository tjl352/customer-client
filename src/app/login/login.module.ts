import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormComponent} from './form/form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, FormComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [LoginComponent, FormComponent]
})
export class LoginModule {}
