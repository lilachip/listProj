import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item';

@Pipe({
  name: 'filterSearchedListItem'
})
export class FilterSearchedListItemPipe implements PipeTransform {
 transform(items: Item[], filter: string): any {
   console.log("items:" + items);
   console.log("filter:" + filter);
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter(item => item.name.indexOf(filter) !== -1);
   }  
} 