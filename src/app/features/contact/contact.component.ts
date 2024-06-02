import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
    formGroup!: FormGroup

    ngOnInit() {
        this.formGroup = new FormGroup({
            text: new FormControl<string | null>(null),
        })
    }
}
