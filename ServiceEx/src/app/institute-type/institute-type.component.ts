import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-institute-type',
  templateUrl: './institute-type.component.html',
  styleUrls: ['./institute-type.component.css']
})
export class InstituteTypeComponent implements OnInit{
  insTpe:any=[]
constructor(private service:HttpClient){}
ngOnInit(): void {
 this.service.get("https://localhost:7039/api/InstituteTypes").subscribe((response)=>{
  
  this.insTpe=response
 },
 (error)=>{console.log(error)}
 ) 
}
}
