import { Component } from '@angular/core'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.css',
})
export class PageNotFoundComponent {
    cross = faMinusCircle
}
