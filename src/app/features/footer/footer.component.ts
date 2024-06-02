import { Component } from '@angular/core'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
})
export class FooterComponent {
  protected faPhone = faPhone
  protected faEnvelope = faEnvelope
  protected faLinkedin = faLinkedin as IconProp
  protected faGithub = faGithub as IconProp
}
