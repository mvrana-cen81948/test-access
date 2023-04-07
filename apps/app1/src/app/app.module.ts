import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Lib1Module } from "@semantic-release-test/lib1";
import { SharedModule } from "@semantic-release-test/shared";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    Lib1Module,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
