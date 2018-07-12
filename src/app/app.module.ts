import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpInterceptor} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoDataService } from './todo-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
