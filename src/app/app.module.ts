import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CustomFormsModule } from 'ng5-validation'

import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TsFieldComponent } from './components/settings/ts-field/ts-field.component';
import { InternetComponent } from './components/internet/internet.component';
import { LogComponent } from './components/log/log.component';
import { MeasurementComponent } from './components/measurement/measurement.component';
import { SensorsComponent } from './components/sensors/sensors.component';
import { ThingspeakComponent } from './components/thingspeak/thingspeak.component';

const appRoutes: Routes = [
  { path: '', component: SettingsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    NavbarComponent,
    FooterComponent,
    TsFieldComponent,
    InternetComponent,
    LogComponent,
    MeasurementComponent,
    SensorsComponent,
    ThingspeakComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
