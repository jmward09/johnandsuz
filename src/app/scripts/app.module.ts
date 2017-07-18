import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
import { RouterModule }   from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from '../scripts/app.component';
import { InviteComponent } from '../scripts/invite.component';
import { GramComponent } from '../scripts/gram.component';
import { AccomodationsComponent } from '../scripts/accomodations.component';
import { ReceptionComponent } from '../scripts/reception.component';
import { AboutComponent } from '../scripts/about.component';
import { RsvpComponent } from '../scripts/rsvp.component';
import { OtherComponent } from '../scripts/other.component';
import { HoneymoonComponent } from '../scripts/honeymoon.component';
import { HomeComponent } from '../scripts/home.component';



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