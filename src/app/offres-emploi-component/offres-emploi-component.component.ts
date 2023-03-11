import { Component } from '@angular/core';


@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent {
  listeEmploi = [{
  titre: 'Développeur ',
  description : 'Développeur Front-end',
  lieu: 'Paris',
  etat: true
},
    {
      titre: 'ingénieur ',
      description : 'Ingénieur Cloud',
      lieu: 'Canada',
      etat: false
    },{
      titre: 'Technisien ',
      description : 'semi Technicien',
      lieu: 'US',
      etat: true
    }

  ]

 somme :any=0;
    Somme(){
    this.somme = this.listeEmploi.filter(p=>p.etat==true).length

  }
 listeEmploiFiltree : any [] = []
  nomEntrepriseRecherche: any;
  rechercherEmploiParEntreprise() {
    this.listeEmploiFiltree=this.listeEmploi
    this.listeEmploiFiltree=this.listeEmploi.filter(emploi => emploi.titre.includes(this.nomEntrepriseRecherche));
  }
}
