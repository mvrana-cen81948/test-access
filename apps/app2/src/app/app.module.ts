import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Lib2Module } from "@semantic-release-test/lib2";
import { SharedModule } from "@semantic-release-test/shared";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Lib2Module, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
