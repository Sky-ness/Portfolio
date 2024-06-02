import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { Router } from '@angular/router'
import { faGit } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faRunning } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
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
