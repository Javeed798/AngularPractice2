import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Child1Component } from './child1/child1.component'
import { FormsModule } from '@angular/forms';
import { UsdToInrPipe } from './pipes/usd-to-inr.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    UserDetailsComponent,
    Child1Component,
    UsdToInrPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
