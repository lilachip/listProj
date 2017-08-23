import {Component, Input} from '@angular/core';
import { Item } from './item';

@Component({
  selector:'item-detail',
  template:`
  <div *ngIf="item" class="rightDIv">
  <h2>{{item.name}} details!</h2>
  <div><label>id: </label>{{item.id}}</div>
  <div>
    <label>change recipe's name: </label>
    <input [(ngModel)]="item.name" placeholder="name"/>
    </div>
    <p class="markedLabel">Easy 2 make: </p>
    <p class="recipe">{{item.recipe}}</p>    
  </div>
  `, 
  styleUrls: ['./item-detail.component.css'],
})

export class ItemDetailComponent{
  @Input()item: Item;
}
