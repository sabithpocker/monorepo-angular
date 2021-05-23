import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [ 
        {
          path: '',
          redirectTo: '/recruiter-dashboard',
          pathMatch: 'full'
        },
        {
          path: 'recruiter-dashboard',
          loadChildren: () =>
            import('@submarine/dashboard').then(
              (module) => module.RecruiterDashboardModule
            ),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
