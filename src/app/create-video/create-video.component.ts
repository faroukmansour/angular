import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../video-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-video',
  templateUrl: './create-video.component.html',
  styleUrls: ['./create-video.component.css']
})
export class CreateVideoComponent implements OnInit {

  constructor(private crudHttpService: VideoServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  id: string = '';
	title: string = '';
  genre: string = '';
	nbrShared: string = '';
  public: string = '';
  
  createTodo(){
    let todo = {
      id: this.id,
      title:this.title,
      genre:this.genre,
      public:this.public,
      nbrShared:this.nbrShared

    }
    
    this.crudHttpService.create(todo).subscribe((response)=>{
      this.router.navigateByUrl('/');
    },(error=>{

    }));
  }

}
