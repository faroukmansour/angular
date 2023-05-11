import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../video-service.service';
import { video } from '../video';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vide',
  templateUrl: './vide.component.html',
  styleUrls: ['./vide.component.css']
})
export class VideComponent implements OnInit {
  title = 'angular-service-app';
  searchByKeyWord : string = '';
  todoList:any = {
    nbrShared :"" 
};
  selectedTopic: string = '';
  filteredUsers: video[] = [];
  nbrShared: any;

  constructor(private crudHttpService: VideoServiceService) { }

  ngOnInit(): void {
    this.listTodos();
  }
  listTodos(){
    this.crudHttpService.list().subscribe((response)=>{
      this.todoList = response;
    },(error=>{

    }));
  }


  createTodo(){
    let todo = {
      id: new Date().getTime(),
      title:`Some Todo` 
    }
    this.crudHttpService.create(todo).subscribe((response)=>{
      this.listTodos();
    },(error=>{

    }));
  }


  editTodo(todo: any){
    let data = {
      id: new Date().getTime(),
      title:`Some Todo` 
    }
    this.crudHttpService.update(todo.id,data).subscribe((response)=>{
      this.listTodos();
    },(error=>{

    }));
  }



  deleteTodo(id: any){
    this.crudHttpService.delete(id).subscribe((response)=>{
      this.listTodos();
    },(error=>{
    }));
  }
  videos: any[] = [];

  onTopicChange() {
    if (this.selectedTopic) {
      this.filteredUsers = this.videos.filter(listTodos => listTodos.genre === this.selectedTopic);
    } else {
      this.filteredUsers = this.videos;
    }
  }

  incrementShares(id: any,video:any) {
    this.crudHttpService.update(id,video).subscribe((response)=>{
     // this.listTodos.nbrShared ++;
      this.listTodos();
    },(error=>{
    }));
 
  }
}
