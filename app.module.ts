import {Routes, RouterModule} from '@angular/router';

import { NgModule }     from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AboutComponent} from './about.component';
import { HomeComponent} from './home.component';
import { AppComponent } from './app.component';
import { NotFoundComponent} from './not-found.component';
import { HttpClientModule } from '@angular/common/http';
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', redirectTo: '/about', pathMatch:'full'},
    { path: '**', component: NotFoundComponent }
]
@NgModule({
    imports: [ BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
    declarations: [AppComponent, HomeComponent, AboutComponent, NotFoundComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
