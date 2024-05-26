import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { Router } from '@angular/router'
import { faGit } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faRunning } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrl: './top-bar.component.css',
})
export class TopBarComponent implements OnInit {
    items: MenuItem[] | undefined

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Mes projets',
                icon: faGit.iconName,
                route: '/project',
            },
            {
                label: 'Mes loisirs',
                icon: faRunning.iconName,
                route: '/loisirs',
            },
            {
                label: 'Contact',
                icon: faEnvelope.iconName,
                route: '/contact',
            },
        ]
    }
}
