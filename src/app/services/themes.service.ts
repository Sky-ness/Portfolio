import { Inject, Injectable } from '@angular/core'
import { DOCUMENT } from '@angular/common'

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    themes: string[] = ['lara-dark-green.css', 'lara-light-green.css']

    constructor(@Inject(DOCUMENT) private document: Document) {}

    switchTheme(mode: boolean) {
        let themeLink = this.document.getElementById(
            'app-theme'
        ) as HTMLLinkElement
        mode
            ? (themeLink.href = this.themes[1])
            : (themeLink.href = this.themes[0])
    }
}
