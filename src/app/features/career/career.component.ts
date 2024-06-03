import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-career',
    templateUrl: './career.component.html',
    styleUrl: './career.component.css',
})
export class CareerComponent implements OnInit{
  experiences: any[] | undefined

  ngOnInit(): void {
    this.experiences =[
      {
        title: 'Stage en Grèce',
        date: '11/12/2024',
        text: 'J\'ai effectué un stage Erasmus en grèce ' +
          'pendant 3 mois dans l\'université de Zante où ' +
          'j\'ai développé un site web qui répertorie tous les oliviers monumentaux de l\'ile',
        pictures:
          'https://imgs.search.brave.com/GlmXAJMAxsTksofo7Fx09Qwz-aA5isS9cpSId1QWf5E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/emFudGUuaW5mby93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8x/Mi9iZWF1dGlmdWwt/cGxhY2VzLWluLXph/a3ludGhvcy16YW50/ZS5qcGc',
        link: 'https://envi.ionio.gr/en/department/description/',
      },
      {
        title: 'Wavenet',
        date: '11/12/2024',
        text: 'J\'ai effectué une alternance pendant 1an dans une entreprise belge de développement Web.',
        pictures:
          'https://imgs.search.brave.com/82foLDZCyS0ooSOmLCCRiZXckVCCLld0sW8DYbooT-Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0M1/NjFCQVFIalZxb2g3/OFBJQXcvY29tcGFu/eS1iYWNrZ3JvdW5k/XzEwMDAwLzAvMTYw/ODE5NjY4MDM2My93/YXZlbmV0X3Nwcmxf/Y292ZXI_ZT0yMTQ3/NDgzNjQ3JnY9YmV0/YSZ0PVdIMDlJUDNf/V09PWWV0TzRjNWVW/d2RRYkJhbm9oX3Bs/TlhVUHRuQWxKekk',
        link: 'https://www.wavenet.be/fr/',
      },
    ]
  }

}
