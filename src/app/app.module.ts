import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Angular Material Stuff
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AvengerService } from './shared/avenger.service';
import { EventsService } from './shared/events.service';

// Routing
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AvengerDialogComponent } from './avenger-dialog/avenger-dialog.component';
import { AvengerTableComponent } from './avenger-table/avenger-table.component';
import { MatDialogRef } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    AvengerDialogComponent,
    AvengerTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [AvengerService, EventsService, {
    provide: MatDialogRef,
    useValue: {
      close: any => { }
    }
  }],
  bootstrap: [AppComponent],
  entryComponents: [AvengerDialogComponent]
})
export class AppModule { }
