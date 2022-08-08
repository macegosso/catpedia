import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catModel } from '../../cat.model';
import { catApiService } from '../../catApi.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  catData: any

  constructor(private catService: catApiService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.catService.getCatById(this.router.snapshot.params["id"]).subscribe((info: catModel)=>{this.catData=info;console.log(info)})
  }
}
