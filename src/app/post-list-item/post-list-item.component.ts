import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() PostComment: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;

  constructor() {
   }

   getMore() {
     this.postLoveIts++;
     console.log(this.postLoveIts);
   }

   getLess() {
     this.postLoveIts--;
     console.log(this.postLoveIts);
   }

   postOrder(){

   }
  ngOnInit() {
  }
}
