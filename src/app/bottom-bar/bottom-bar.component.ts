import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service'

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {

  constructor(public catserv: CatalogService) { }

  ngOnInit() {
  }

}
