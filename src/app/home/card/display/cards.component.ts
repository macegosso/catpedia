import { gatos } from '../../cat.model';
import { Component, OnInit } from '@angular/core';
import { catApiService } from '../../catApi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  favorited: boolean = false
  catData: any 

  constructor(private catService: catApiService, private router: Router) { }

  ngOnInit(): void {
    this.catService.getCat().subscribe((infos: gatos[])=>{this.catData=infos;console.log(infos)})
  }

  favCats(id: string){
    return this.catService.favAdd(id).subscribe((a)=>{
      console.log(id)
    })
  }

  routeInfo(id: number){
    this.router.navigate(['/detail', id]);
  }
}
