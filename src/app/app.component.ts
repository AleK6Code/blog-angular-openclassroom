import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-angular-openclassroom';

  
Posts= [
  {
    title: 'Hello World 1 !!!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eius reprehenderit pariatur architecto corrupti vitae alias blanditiis dolore placeat eum, ducimus aut repellendus error a perferendis suscipit voluptate ut veritatis.',
    loveIts: 3,
    created_at: new Date
  },
  {
    title: 'Hello World 2 !!!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eius reprehenderit pariatur architecto corrupti vitae alias blanditiis dolore placeat eum, ducimus aut repellendus error a perferendis suscipit voluptate ut veritatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eius reprehenderit pariatur architecto corrupti vitae alias blanditiis dolore placeat eum, ducimus aut repellendus error a perferendis suscipit voluptate ut veritatis.',
    loveIts: 0,
    created_at: new Date
  },
  {
    title: 'Hello World 3 !!!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eius reprehenderit pariatur architecto corrupti vitae alias blanditiis dolore placeat eum, ducimus aut repellendus error a perferendis suscipit voluptate ut veritatis.',
    loveIts: -2,
    created_at: new Date
  },
  {
    title: 'Hello World 4 !!!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eius reprehenderit pariatur architecto corrupti vitae alias blanditiis dolore placeat eum, ducimus aut repellendus error a perferendis suscipit voluptate ut veritatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eius reprehenderit pariatur architecto corrupti vitae alias blanditiis dolore placeat eum, ducimus aut repellendus error a perferendis suscipit voluptate ut veritatis.',
    loveIts: 1,
    created_at: new Date
  }
];

}

