import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { SiteLoginComponent } from './site-login/site-login.component';
import { CdkTableModule } from '@angular/cdk/table';
import { SiteRegisterComponent } from './site-register/site-register.component';
import { SocialLoginModule,AuthServiceConfig,GoogleLoginProvider,FacebookLoginProvider } from 'angular4-social-login';
import {MatMenuModule,MatCardModule,MatInputModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatTableModule,MatToolbarModule,MatProgressSpinnerModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import { AboutComponent } from './about/about.component';
import { LoaderComponent } from './loader/loader.component';

const appRoutes: Routes = [
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'Create Book' }
  },{
    path: 'login',
    component: SiteLoginComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  },
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
];
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("77735412130-rrf6ajjr0e6a8a9ro73ftd0f24nt0kr6.apps.googleusercontent.com") },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("Facebook-App-Id")
    } ]);
    export function provideConfig() {
      return config;
    }
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteLayoutComponent,
    SiteLoginComponent,
    SiteRegisterComponent,
    AboutComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,SocialLoginModule.initialize(config),
    MatDatepickerModule,MatProgressSpinnerModule,
    MatToolbarModule,
    MatTableModule,
    MatNativeDateModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FormsModule,
    CdkTableModule,

    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [{
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
