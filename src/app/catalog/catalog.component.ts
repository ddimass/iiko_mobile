import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { Product } from '../classes/product';
import { CastExpr } from '@angular/compiler';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(public catserv: CatalogService) { }

  ngOnInit() {
    
  }

}
