import { Component, OnInit } from '@angular/core';
import { urlImages } from 'src/app/core/config';
import { Habitat } from 'src/app/interfaces/habitat';
import { HabitatService } from 'src/app/services/habitat.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  allMaisons!: Habitat[] 
  images = urlImages
  constructor(
    private maisonService: HabitatService,
  ) { }
  ngOnInit(): void {
    this.onGetMaison()
  }


  onGetMaison() {
    this.maisonService.findAll().subscribe({
      next: res => {
        debugger
        this.allMaisons = res;
      },
    });
  }


}
