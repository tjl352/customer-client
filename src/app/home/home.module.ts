import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {JumboComponent} from './jumbo/jumbo.component';
import {LoginModule} from '../login/login.module';

@NgModule({
  declarations: [HomeComponent, NavComponent, JumboComponent],
  imports: [CommonModule, LoginModule],
  exports: [HomeComponent]
})
export class HomeModule {}
