import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { urlImages } from 'src/app/core/config';
import { Habitat } from 'src/app/interfaces/habitat';
import { Quartier } from 'src/app/interfaces/quartier';
import { TypeHabitat } from 'src/app/interfaces/type-habitat';
import { QuartierService } from 'src/app/services/quartier.service';
import { TypeHabitatService } from 'src/app/services/type-habitat.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  images = urlImages
  id!: string | null
  allTypeHabitat!: TypeHabitat[];
  allQuatier!: Quartier[];

  habitat: Habitat = {
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

  constructor(private route: ActivatedRoute,private maisonService: TypeHabitatService,
    private quartierService: QuartierService,) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  //  console.log(this.id)
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
