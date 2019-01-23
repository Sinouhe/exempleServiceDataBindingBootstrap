import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ModaleComponent } from './modale/modale.component';
import { ModalCallComponent } from './modal-call/modal-call.component';
import { ServiceModalService } from './service/service-modal.service';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ModaleComponent,
    ModalCallComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [ServiceModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
