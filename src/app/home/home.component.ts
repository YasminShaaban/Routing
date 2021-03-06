import { Component, OnInit } from '@angular/core';
import {ServersComponent} from "../servers/servers.component"
import{Router,ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }
  onLoadServers(){
     
    this.router.navigate(["/servers"]);
    this.router.navigate( ['servers'], { relativeTo:this.route});
 }
 onLoadServer(id:number){

   this.router.navigate(['/servers',id,'edit'],{queryParams:{allowEdit:'1'},fragment:'loading'})


 }
}
 