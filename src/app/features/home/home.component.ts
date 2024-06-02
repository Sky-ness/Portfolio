import { Component } from '@angular/core';
import { faAngular, faGit, faJava, faLinux, faNode } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  protected readonly faAngular = faAngular as IconProp
  protected readonly faJava = faJava as IconProp
  protected readonly faNode = faNode as IconProp
  protected readonly faGit = faGit as IconProp
  protected readonly faLinux = faLinux as IconProp
}
