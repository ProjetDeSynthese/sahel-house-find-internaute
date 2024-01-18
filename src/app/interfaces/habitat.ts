import { Quartier } from 'src/app/interfaces/quartier';
import { Secteur } from './secteur';
import { TypeHabitat } from './type-habitat';
import { Proprietaire } from './proprietaire';

export interface Habitat {
      id?: String,
      statut: String
      chambre: Number
      douche: Number
      superficie: Number
      prix: String
      longitude: any
      latitude: any
      parking: Number
      description: String
      proprietaire: Proprietaire
      image: String[],
      video: String
      quartier: Quartier
      typeMaison: TypeHabitat
}
