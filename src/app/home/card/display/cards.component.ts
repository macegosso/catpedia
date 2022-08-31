import { Component, OnInit } from '@angular/core';
import { catApiService } from 'src/app/services/catApi.service';
import { Router } from '@angular/router';
import { gatos } from 'src/app/models/cat.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  catData: any 

  constructor(private catService: catApiService, private router: Router) { }

  ngOnInit(): void {
    this.catService.getCat().subscribe((infos: gatos[])=>{this.catData=infos})
  }

  favCats(id: string){
    return this.catService.favAdd(id).subscribe((a)=>{})
  }

  routeInfo(id: number){
    this.router.navigate(['/detail', id]);
  }
}
