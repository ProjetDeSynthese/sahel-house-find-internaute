import { TypeHabitat } from 'src/app/interfaces/type-habitat';
import { TypeHabitatService } from './../../../services/type-habitat.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Quartier } from 'src/app/interfaces/quartier';
import { QuartierService } from 'src/app/services/quartier.service';
import { Habitat } from 'src/app/interfaces/habitat';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  form!: FormGroup;
  allTypeHabitat!: TypeHabitat[];
  allQuatier!: Quartier[];
  allMaisons: Habitat[] = [
    {
      id: '1',
      statut: "A vendre",
      chambre: 3,
      douche: 3,
      superficie: 3000,
      prix: "2000",
      longitude: 3000,
      latitude: 3000,
      parking: 1,
      description: "errfer",
      proprietaire: {
        id: '1',
        nom: "rr",
        prenom: " prenom",
        email: "email",
        contact: "contact"
      },
      image: ['assets/img/demo/property-1.jpg'],
      video: "assets/img/demo/property-1.jpg",
      quartier: {
        id: "12",
        name: " ",
        commune: {
          id: "12",
          name: " ",
        }
      },
      typeMaison: {
        id: "12",
        name: " ",
      }
    }
  ]

  constructor(
    private maisonService: TypeHabitatService,
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
        this.allTypeHabitat = res;
      },
    });
  }

}
