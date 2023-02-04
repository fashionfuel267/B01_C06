import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-institute-type',
  templateUrl: './show-institute-type.component.html',
  styleUrls: ['./show-institute-type.component.css']
})
export class ShowInstituteTypeComponent implements OnInit{
insTtype:any

  constructor(private route:ActivatedRoute,private service:HttpClient){}
  ngOnInit(): void {
   let id= this.route.snapshot.paramMap.get('id');
   console.log(id)
    this.service.get("https://localhost:7039/api/InstituteTypes/"+ id).subscribe((data)=>{
      this.insTtype=data
    },
    (error)=>{console.log(error)})
  }
  Delete(Id:any){
    console.log(Id)
    this.service.delete("https://localhost:7039/api/InstituteTypes/"+ Id).subscribe((data)=>{
     console.log(data)
    },
    (error)=>{console.log(error)})
  }
}
 