import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { MsgBoxComponent } from './core/msg-box/msg-box.component';
import { NgModule } from '@angular/core';
import { UsersListComponent } from './core/users-list/users-list.component';
// import { TextngComponent } from './core/msg-box/textng/textng.component';

import { HttpClientModule } from '@angular/common/http';
import { NetworkService } from './shared/services/network.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    MsgBoxComponent,
    // TextngComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatChipsModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  providers: [
    NetworkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
