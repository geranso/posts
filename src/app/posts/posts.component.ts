import { Component, OnInit } from '@angular/core';
import{PostsService} from '../posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postservice: PostsService) { }
  ambo !:any;

  ngOnInit(): void {

    this.getPosts()
  }
getPosts(){
this.postservice.getposts().subscribe(res=> {
   const res2 =res.filter((r:any )=>r.id<6)
  this.ambo=res2})

}
}
