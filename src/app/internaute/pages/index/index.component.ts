import { Component, OnInit } from '@angular/core';
import { Habitat } from 'src/app/interfaces/habitat';
import { HabitatService } from 'src/app/services/habitat.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  allMaisons!: Habitat[] 

  constructor(
    private maisonService: HabitatService,
  ) { }
  ngOnInit(): void {
    this.onGetMaison()
  }


  onGetMaison() {
    this.maisonService.findAll().subscribe({
      next: res => {
        this.allMaisons = res;
      },
    });
  }


}
