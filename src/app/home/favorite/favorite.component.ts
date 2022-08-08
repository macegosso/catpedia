import { gatos } from '../cat.model';
import { Component, OnInit } from '@angular/core';
import { catApiService } from '../catApi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.sass']
})
export class FavoriteComponent implements OnInit {

  pegarDiferenca() {
    let r1 = [2,4,6,8];
    let r2 = [3,4,5,7,9];       
    let r3 = r1.filter( a => !r2.includes( a ) );

    console.log( r3 );
}



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
      console.log(fav)
      this.pegarDiferenca();
    })
  }

  routeInfo(id: number){
    this.router.navigate(['/detail', id]);
  }
}
