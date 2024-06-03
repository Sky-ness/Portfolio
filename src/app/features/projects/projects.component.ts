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
                    'https://imgs.search.brave.com/eyivNRCbegcF4a96CHf0U2ORJ5Ssb4tJC6ehCUV2wyo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvY2xhc3NpZmlj/YXRpb24tMS5wbmc',
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
                    'https://imgs.search.brave.com/_dPUMdY8haFqTSIPbvOHj46WWiDR19Z4kf6koEmZxBQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9maXZl/cnItcmVzLmNsb3Vk/aW5hcnkuY29tL2lt/YWdlcy90X21haW4x/LHFfYXV0byxmX2F1/dG8scV9hdXRvLGZf/YXV0by9naWdzLzEx/NDI0ODgyNy9vcmln/aW5hbC9lODcyNjE2/OTUwZGRjZTllNTcy/ZTc2OTY5ZTQyMTk4/YjA5NzI5OGExL3By/b2Zlc3Npb25hbGx5/LXRlYWNoLXlvdS1h/Z2FyaW8ucG5n',
                link: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
            },
            {
                title: 'Projet Agile',
                date: '09/2022',
                text:
                    'En début de semestre de la 2ème année de BUT informatique nous avons développé un jeu rétro ' +
                    'avec la méthode agile en java en utilisant des sprint de 4 heures et en faisant des démonstrations a la fin de ceux ci  .',
                pictures:
                    'https://imgs.search.brave.com/AIiZ4nj5jD3dBRF7B8fLs-vRbm8YOHlIPUKuOL3laXE/rs:fit:860:0:0/g:ce/aHR0cDovL3d3dy5j/b21tZW50Z2Vlay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDEtMjkvdGVy/bWluYWwtbWFjb3Mt/dGV0cmlzLmpwZw',
                link: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
            },
        ]
    }
}
