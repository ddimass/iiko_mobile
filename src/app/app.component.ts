import { Component, OnInit } from '@angular/core';
import { CatalogService } from './services/catalog.service';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = environment.title;

  constructor(public catserv: CatalogService) { }

  ngOnInit(): void {
    this.catserv.iikoGetnomenclature();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
