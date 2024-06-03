import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'
import {
    faCode,
    faEnvelope,
    faHome,
    faLightbulb,
    faMoon,
    faRunning,
    faSuitcase,
} from '@fortawesome/free-solid-svg-icons'
import { ThemeService } from '../../services/themes.service'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
    items: MenuItem[] | undefined
    protected lightMode: boolean = false
    protected light = faLightbulb
    protected moon = faMoon
    constructor(protected themeService: ThemeService) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Acceuil',
                icon: faHome.iconName,
                route: '/',
            },
            {
                label: 'Mes projets',
                icon: faCode.iconName,
                route: '/projects',
            },
            {
                label: 'loisirs',
                icon: faRunning.iconName,
                route: '/hobbies',
            },
            {
                label: 'expériences professionnelles',
                icon: faSuitcase.iconName,
                route: '/career',
            },
            {
                label: 'Contact',
                icon: faEnvelope.iconName,
                route: '/contact',
            },
        ]
    }

    switchTheme() {
        this.themeService.switchTheme(this.lightMode)
    }
    switchIconTheme() {
        return this.lightMode ? this.light : this.moon
    }
}
