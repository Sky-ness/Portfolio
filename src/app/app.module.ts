import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FooterComponent } from './features/footer/footer.component'
import { MenuComponent } from './features/menu/menu.component'
import { ContactComponent } from './features/contact/contact.component'
import { MenubarModule } from 'primeng/menubar'
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component'
import { ButtonModule } from 'primeng/button'
import { ReactiveFormsModule } from '@angular/forms'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { ProjectsComponent } from './features/projects/projects.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CheckboxModule } from 'primeng/checkbox';
import { HomeComponent } from './features/home/home.component';
import { HobbiesComponent } from './features/hobbies/hobbies.component'

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        MenuComponent,
        ContactComponent,
        PageNotFoundComponent,
        ProjectsComponent,
        HomeComponent,
        HobbiesComponent,
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
