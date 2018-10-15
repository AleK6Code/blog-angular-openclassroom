import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  
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
