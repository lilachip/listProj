import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
//import { AngularFireModule } from 'angularfire2';
import { ItemDetailComponent } from './item-detail.component';
import { FilterSearchedListItemPipe } from './filter-searched-list-item.pipe';
//import { Ng2SearchPipeModule } from './ng2-search-filter';
//import {SearchPipe} from './searchPipe'


/*export const firebaseConfig = {
  apiKey: "AIzaSyBZ_WKSwx4hJxmoslFX7F5w4UWw-12i0JI",
  authDomain: "listproj-e378a.firebaseapp.com",
  databaseURL: "https://listproj-e378a.firebaseio.com",
  projectId: "listproj-e378a",
  storageBucket: "listproj-e378a.appspot.com",
  messagingSenderId: "339647479751"
};*/

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    FilterSearchedListItemPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
    //,
    //Ng2SearchPipeModule
  //  AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
