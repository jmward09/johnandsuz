import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
import { RouterModule }   from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { InviteComponent } from './invite.component';
import { GramComponent } from './gram.component';
import { AccomodationsComponent } from './accomodations.component';
import { ReceptionComponent } from './reception.component';
import { AboutComponent } from './about.component';
import { RsvpComponent } from './rsvp.component';
import { OtherComponent } from './other.component';
import { HoneymoonComponent } from './honeymoon.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    AppComponent,
    InviteComponent,
    GramComponent,
    AccomodationsComponent,
    ReceptionComponent,
    AboutComponent,
    RsvpComponent,
    OtherComponent,
    HoneymoonComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'invite',
        component: InviteComponent
      },
      {
        path: 'gram',
        component: GramComponent
      },
      {
        path: 'reception-details',
        component: ReceptionComponent
      },
      {
        path: 'about-us',
        component: AboutComponent
      },
      {
        path: 'rsvp',
        component: RsvpComponent
      },
      {
        path: 'other-things',
        component: OtherComponent
      },
      {
        path: 'honeymoon',
        component: HoneymoonComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'accomodations',
        component: AccomodationsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


export const routing: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: InviteComponent
  }
]);