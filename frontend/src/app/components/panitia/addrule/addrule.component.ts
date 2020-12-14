import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../services/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addrule',
  templateUrl: './addrule.component.html',
  styleUrls: ['./addrule.component.css']
})
export class AddruleComponent implements OnInit {

  constructor(private gamesService:GamesService, private router:Router) { }
  datagame={
    image:'',
    nama:'',
    description:'',
    participant:'',
    matchday:'',
    type:'',
    id:'',
    join:'',
    next:''
  }

  createRuleTournament(){
    this.gamesService.createRuleTournament(this.datagame)
    .subscribe(
      res =>{
      console.log(res)
      res => this.router.navigate([""])
    },
    )
  }

  ngOnInit(): void {
  }

}
