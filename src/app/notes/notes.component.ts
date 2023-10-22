import { Component, OnInit } from '@angular/core';
import {notes} from "./notes"; 
//import { notesService } from '../notes-service.service';
import {Router} from '@angular/router';
import {baseUrl} from "../../../environments/environment";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  list: any = [];
  noteValue!: string;
  noteDescription!: string;

  constructor(private router: Router) { } //private notesService:notesService,
  ngOnInit(): void {
    this.list = [];
    this.noteValue = "";
    this.noteDescription = "";
  }

  addItem(){
    if(this.noteValue != ""){
      const newNote: notes = {
        id: Date.now(),
        title: this.noteValue,
        value: this.noteDescription,
        isDone: false
      }

      // let data = {
      //   phone: this.formGroup.value.phone,
      //   title: this.noteValue,
      //   description: this.noteDescription;
      // }

      // this.list.push(newNote);
      // //get all existing notes from db 
      // getAllNotes(){
      //     try{
      //       this.notesService.getAllNotes(this.value).subscribe(result =>{
      //         console.log("-=-=-=-result : ", result);
      //         if(result.success){
      //           alert(result.message)
      //           // this.jsonToken = result.jsonToken
      //           this.router.navigate(['/notes'])
      //         }else{
      //           alert(result.message)
      //         }
      //       })
      //     }catch(err){
      //       console.log("Error at login: ", err);
      //       alert("Invalid userId or Password.")
      //     }
        
      // }
      console.log("-=-=-= newNote: ", newNote)
      console.log(this.list)
    }

    this.noteValue = "";
    this.noteDescription = ""
  }

  // deleteItem(id:number){
  //   this.list = this.list.filter(item => {
  //     item.id != id
  //   })
  // }

  // updateItem(id:number, newValue:string){
  //   this.list.forEach(element => {
  //     if(element.id == id)
  //     element.value = newValue;
  //   });
  // }
}





