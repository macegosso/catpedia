import { gatos } from '../../models/cat.model';
import { Component, OnInit } from '@angular/core';
import { catApiService } from '../../services/catApi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.sass']
})
export class FavoriteComponent implements OnInit {

  catData: any[] | undefined

  constructor(private catService: catApiService, private router: Router) { }

  delFav(idDel: number){
    return this.catService.delFav(idDel).subscribe((a)=>{
      this.catService.pullFavCats().subscribe((fav)=>{
        this.catData = fav})
    })}

  ngOnInit(): void {
    this.catService.pullFavCats().subscribe((fav)=>{
      this.catData = fav
    })
    
  }

  routeInfo(id: number){
    this.router.navigate(['/detail', id]);
  }
}
