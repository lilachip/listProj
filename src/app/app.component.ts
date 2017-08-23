import { Component, OnInit} from '@angular/core';
//, ViewChild, ElementRef, OnInit
import { Item } from './item';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';
//import {SearchPipe} from './searchPipe'
//import { ItemService } from './item.service';
const ITEMS: Item[] = [
  { id: 11, name: 'chocolate cake', recipe:'2eegs 3 suger cups '},
  { id: 12, name: 'brauni', recipe:'ccccccccccccccccccccccccccccc'},
  { id: 13, name: 'sponge cake', recipe:'dddddddddddddddddddddddddddddddddd'},
  { id: 14, name: 'black forest cake', recipe:'eeeeeeeeeeeeeeeeeeee'},
  { id: 15, name: 'cheese cake', recipe:'fffffffffffffffffffffffffffffffff'},
  { id: 16, name: 'cookies', recipe:'ggggggggggggggggggggggggggggggg'},
  { id: 17, name: 'chocolate chip cake', recipe:'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'},
  { id: 18, name: 'green cake', recipe:'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'},
  { id: 19, name: 'yellow cake', recipe:'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj'},
  { id: 20, name: 'purple cake', recipe:'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'},
];

@Component({
  selector: 'app-root',
  template: `
      <div class="container-fluid"> 
      <div class="row align-items-center"> 
      <div class="col-md-3">   
        <h1>{{title}}</h1>
        <h2>search 4 recipe:</h2>
        <input [(ngModel)]="search">
        <ul class="items">
          <li *ngFor="let item of items | filterSearchedListItem:search"
            [class.selected]="item === selectedItem"
            (click)="onSelect(item)">
            <span>{{item.id}}) {{item.name}}</span>
          </li>
        </ul>
      </div>
      <item-detail class="col-md-8" [item]="selectedItem"></item-detail>
    </div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
//  providers:[ItemService]
})
//implements OnInit
export class AppComponent {
  /*@ViewChild('input')
   input: ElementRef;
   data: any[];*/
  title = 'My Cakes List';
  items: Item[];
  selectedItem: Item;

  onSelect(item:Item):void{
    this.selectedItem = item;
  }
  
  ngOnInit(){
     var _this = this;
     console.log("hello");
     this.items = ITEMS;
    //  var recipeListRef = firebase.database().ref('items/' + itemId + '/listProj');
    //  recipeListRef.on('value', function(snapshot) {
    //    updaterecipeList(postElement, snapshot.val());
    //  });
    //  function writeUserData(ItemId, name, recipe) {
    //   firebase.database().ref('items/' + ItemId).set({
    //     name: name,
    //     recipe: recipe
    //     // ,
    //     // item_picture : imageUrl
    //   });
    // }
      // Get a reference to the database service
      // var database = firebase.database();
     //this.items = firebase.getdata
     //firebase.onNewData(data => _this.items = data)
   }
}
