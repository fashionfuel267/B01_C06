import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstituteTypeComponent } from './institute-type/institute-type.component';
import{HttpClientModule} from '@angular/common/http';
import { ShowInstituteTypeComponent } from './show-institute-type/show-institute-type.component'

@NgModule({
  declarations: [
    AppComponent,
    InstituteTypeComponent,
    ShowInstituteTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
