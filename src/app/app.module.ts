import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FooterComponent } from './footer/footer.component'
import { TopBarComponent } from './top-bar/top-bar.component'
import { ContactComponent } from './contact/contact.component'
import { MenubarModule } from 'primeng/menubar'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { ButtonModule } from 'primeng/button'
import { ReactiveFormsModule } from '@angular/forms'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { ProjectsComponent } from './projects/projects.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CheckboxModule } from 'primeng/checkbox'

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        TopBarComponent,
        ContactComponent,
        PageNotFoundComponent,
        ProjectsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MenubarModule,
        ButtonModule,
        ReactiveFormsModule,
        InputTextareaModule,
        FontAwesomeModule,
        CheckboxModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
