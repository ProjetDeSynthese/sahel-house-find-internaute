import { Component, OnInit } from '@angular/core';
import { Habitat } from 'src/app/interfaces/habitat';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

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
  ngOnInit(): void {
  }



}
