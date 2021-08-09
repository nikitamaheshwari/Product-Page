import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppCarouselComponent } from './components/carousel/carousel.component';
import { ReviewComponent } from './components/review/review.component';
// Reactive forms
import { FormPaymentComponent } from './components/form-payment/form-payment.component';
import { ReactiveFormsModule } from '@angular/forms';
// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
// date picker
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
@NgModule({
  declarations: [
    AppComponent,
    AppCarouselComponent,
    ReviewComponent,
    FormPaymentComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,            
    MatDatepickerModule,       
    MatNativeDateModule,        
    MatMomentDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  // exports: [ 
  //   MatFormFieldModule,  
  //   MatInputModule,  
  //   MatSelectModule
  // ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
