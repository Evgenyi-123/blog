import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {StoreModule} from '@ngrx/store';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AuthModule,
        AppRoutingModule,
        StoreModule.forRoot({}),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
