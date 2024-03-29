export const baseURL = 'http://localhost:8080';
//export const baseURL = 'http://192.168.43.171:8080';
export const baseURL_FRONT_ADMIN = 'http://localhost:58206/';
export const urlImages = [
     'assets/images/1.jpg',
     'assets/images/2.jpg',
     'assets/images/3.jpg',
     'assets/images/4.jpg',
     'assets/images/5.jpeg',
     'assets/images/6.jpeg',
     'assets/images/7.jpeg',
     'assets/images/8.jpeg',
     'assets/images/9.jpeg',
     'assets/images/10.jpeg',
     'assets/images/11.jpeg',
     'assets/images/12.jpeg',
]


export const apiURL = `${baseURL}/api/`;
export const routesApi = {

     COMMUNE: {
          FIND_ALL: apiURL + 'commune/',
          SAVE: apiURL + 'commune/',
          REMOVE: apiURL + 'commune/',
          FIND_BY_ID: apiURL + 'commune/',
          UPDATE: apiURL + 'commune/',
          FIND_QUARTIER: apiURL + 'quartier/findByCommune/',

     }, 
     TYPE_HABITAT: {
          FIND_ALL: apiURL + 'typeMaison/',
          SAVE: apiURL + 'typeMaison/',
          REMOVE: apiURL + 'typeMaison/',
          FIND_BY_ID: apiURL + 'typeMaison/',
          UPDATE: apiURL + 'typeMaison/',
     },
     QUARTIER: {
          FIND_ALL: apiURL + 'quartier/',
          SAVE: apiURL + 'quartier/',
          REMOVE: apiURL + 'quartier/',
          FIND_BY_ID: apiURL + 'quartier/',
          UPDATE: apiURL + 'quartier/',

     },
     PROPRIETAIRE: {
          FIND_ALL: apiURL + 'proprietaire/',
          SAVE: apiURL + 'proprietaire/',
          REMOVE: apiURL + 'proprietaire/',
          FIND_BY_ID: apiURL + 'proprietaire/',
          UPDATE: apiURL + 'proprietaire/',

     }, 

     HABITAT: {
          FIND_ALL: apiURL + 'maison/',
          SAVE: apiURL + 'maison/',
          REMOVE: apiURL + 'maison/',
          FIND_BY_ID: apiURL + 'maison/',
          UPDATE: apiURL + 'maison/',
     },








     REGION: {
          FIND_ALL: apiURL + 'region/',
          SAVE: apiURL + 'region/',
          REMOVE: apiURL + 'region/',
          FIND_BY_ID: apiURL + 'region/',
          UPDATE: apiURL + 'region/',
          FIND_DEPARTEMENT: apiURL + 'departement/findByRegion/',

     },
     DEPARTEMENT: {
          FIND_ALL: apiURL + 'departement/',
          SAVE: apiURL + 'departement/',
          REMOVE: apiURL + 'departement/',
          FIND_BY_ID: apiURL + 'departement/',
          UPDATE: apiURL + 'departement/',
          FIND_VILLE: apiURL + 'ville/findByDepartement/',


     },

     VILLE: {
          FIND_ALL: apiURL + 'ville/',
          SAVE: apiURL + 'ville/',
          REMOVE: apiURL + 'ville/',
          FIND_BY_ID: apiURL + 'ville/',
          UPDATE: apiURL + 'ville/',
          FIND_COMMUNE: apiURL + 'commune/findByVille/',

     },
     CITOYEN: {
          FIND_ALL: apiURL + 'citoyen/',
          SAVE: apiURL + 'citoyen/',
          REMOVE: apiURL + 'citoyen/',
          FIND_BY_ID: apiURL + 'citoyen/',
          UPDATE: apiURL + 'citoyen/',
     },
     SECTEUR: {
          FIND_ALL: apiURL + 'secteur/',
          SAVE: apiURL + 'secteur/',
          REMOVE: apiURL + 'secteur/',
          FIND_BY_ID: apiURL + 'secteur/',
          UPDATE: apiURL + 'secteur/',
     },

     User: {
          FIND_ALL: apiURL + 'user/',
          SAVE: apiURL + 'user/',
          REMOVE: apiURL + 'user/',
          FIND_BY_ID: apiURL + 'user/',
          UPDATE: apiURL + 'user/',
     },

     AUTH: {
          LOGIN: apiURL + 'auth/authenticate'
     },

};
