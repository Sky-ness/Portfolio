import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
    protected projects: any[] | undefined
    ngOnInit() {
        this.projects = [
            {
                title: 'Classification Java',
                date: '01/12/2022',
                text:
                    'Nous avons développés en deuxième année de BUT informatique , ' +
                    "une application en java avec une interface développé en java fx qui permet à partir d'un fichier " +
                    "format CSV de déterminer une des caractéristiques de n'importe quel objet, animal ou d'autre chose implémentée dans le model." +
                    ' Nous avons eu comme contrainte de pouvoir réimplémenter un nouvel objet très rapidement pour cela nous avons utilisé la généricité.' +
                    ' Nous avons également implémenter une fonctionnalité qui consiste a donné un taux de fiabilité de notre model (la Robustesse) .',
                pictures:
                    'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
                link: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
            },
            {
                title: 'Dungeon and Dragon',
                date: '12/04/2023',
                text:
                    'Nous avons développé un jeu en ligne multijoueur qui s\'appelle "Dungeon and Dragon" ' +
                    'où le but est de mangé des points de nourriture sur la carte pour devenir plus gros et  pouvoir mangé les autres joueurs. ' +
                    "Dans notre jeux, il y a une fonction rejouer et un tableau des scores ou l'on voit  les autres joueurs. " +
                    "Et on peut choisir la couleur de son avatar et le nom qui s'affiche.",
                pictures:
                    'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
                link: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
            },
            {
                title: 'Mini Projet Agile',
                date: '09/2022',
                text:
                    'En début de semestre de la 2ème année de BUT informatique nous avons développé un jeu rétro ' +
                    'avec la méthode agile en java en utilisant des sprint de 4 heures et en faisant des démonstrations a la fin de ceux ci  .',
                pictures:
                    'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
                link: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
            },
        ]
    }
}
