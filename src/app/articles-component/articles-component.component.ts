import { Component } from '@angular/core';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent {

  ngOnInit (): void {
    this.Somme();
  }
  listArticles =[
    {titre:"Le championnat du monde ",contenu:"Le championnat du monde  est ",auteur:"med taher ",date:"12/12/2005" ,categorie:"sport"},
    {titre:"Les nouveaux parents",contenu:"les nouveau parent",auteur:"ahmed said ",date:"11/11/2018" ,categorie:"Education"},
    {titre:"comment ecrire votre cv ",contenu:"pour reussir a decraucher un emploi ",auteur:"marie elsa",date:"02/04/2017" ,categorie:"travail"}
  ]

  somme : any =0
  Somme(){
      this.somme = this.listArticles.filter(p=>p.categorie!='travail').length
  }
}
