import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catModel } from '../../../models/cat.model';
import { catApiService } from '../../../services/catApi.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  cat: any

  constructor(private catService: catApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.catService.getCatById(this.route.snapshot.params["id"]).subscribe((info: catModel)=>{this.cat=info})
  }

  favCats(id: any){
    return this.catService.favAdd(id).subscribe((a)=>{
})
  }

  routeFav(id: any){
    this.router.navigate([`/favoritos`])
  }
}
