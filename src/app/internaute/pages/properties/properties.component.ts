import { TypeHabitat } from 'src/app/interfaces/type-habitat';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Quartier } from 'src/app/interfaces/quartier';
import { QuartierService } from 'src/app/services/quartier.service';
import { Habitat } from 'src/app/interfaces/habitat';
import { HabitatService } from 'src/app/services/habitat.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  form!: FormGroup;
  allTypeHabitat!: TypeHabitat[];
  allQuatier!: Quartier[];
  allMaisons!: Habitat[] 

  constructor(
    private maisonService: HabitatService,
    private quartierService: QuartierService,
  ) { }
  ngOnInit(): void {

    this.onGetMaison();
    this.onGetQuartier();
  }

  onGetQuartier() {
    this.quartierService.findAll().subscribe({
      next: res => {
        this.allQuatier = res;
      },
    });
  }

  onGetMaison() {
    this.maisonService.findAll().subscribe({
      next: res => {
        this.allMaisons = res;
      },
    });
  }

}
