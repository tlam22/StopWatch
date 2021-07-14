import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StopWatchComponent } from './stop-watch/stop-watch.component';
import { StopWatchTimePipe } from './pipes/stop-watch-time.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, StopWatchComponent, StopWatchTimePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
