import { Component } from "@angular/core";
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";

import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
newItemInput: any;
addItem(...items: { description: string, done: boolean }[]) {
  // Use the push method to add all items to the allItems array
  this.allItems.push(...items);
}


// addItem(item: any) {
//   this.allItems.push(item);

// }
  componentTitle = "Logical addition";

  filter: 'all' | 'active' | 'done' = 'all';


  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];
  likeCount = 100; // Initialize like count at 100

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

  increaseLikes() {
    this.likeCount++; // Increment like count when the icon is clicked
  }

  decreaseLikes() {
   
    this.likeCount--; // Decrement like count when the Dislike button is clicked
    throw new Error('Method not implemented.');
 }
  
}

