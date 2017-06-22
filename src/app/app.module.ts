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

@NgModule({
  declarations: [
    AppComponent,
    InviteComponent,
    GramComponent,
    AccomodationsComponent
    
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