import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';

import { GoogleMapComponent } from './components/map/map.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        GoogleMapComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'gmap', component: GoogleMapComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDl-xCg3-6YKQym3hJiYXoz3Q_RoeMWiMo'
        })
    ]
})
export class AppModuleShared {
}
