import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './views/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { TrajectoryComponent } from './views/trajectory/trajectory.component';
import { SectionComponent } from './components/section/section.component';

const appRoutes: Routes = [
  { path: 'trajectory', component: TrajectoryComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    TitleComponent,
    SubtitleComponent,
    BannerComponent,
    HomeComponent,
    TrajectoryComponent,
    SectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
