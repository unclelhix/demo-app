import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { RestangularModule } from 'ngx-restangular';
import { SharedCommonModule } from '@shared.common/shared-common.module';
import { RestangularConfigFactory } from './@shared.common';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    SharedCommonModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
