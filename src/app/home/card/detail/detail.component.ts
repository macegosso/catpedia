import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catModel } from '../../cat.model';
import { catApiService } from '../../catApi.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  cat: any

  constructor(private catService: catApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.catService.getCatById(this.route.snapshot.params["id"]).subscribe((info: catModel)=>{this.cat=info;console.log(info)})
  }

  favCats(id: any){
    return this.catService.favAdd(id).subscribe((a)=>{
      console.log(id)
    })
  }

  routeFav(id: any){
    this.router.navigate([`/favoritos`])
  }
}
