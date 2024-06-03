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
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { ProjectsComponent } from './features/projects/projects.component'
import {
    FaIconLibrary,
    FontAwesomeModule,
} from '@fortawesome/angular-fontawesome'
import { CheckboxModule } from 'primeng/checkbox'
import { HomeComponent } from './features/home/home.component'
import { HobbiesComponent } from './features/hobbies/hobbies.component'
import { CardModule } from 'primeng/card'
import { AvatarModule } from 'primeng/avatar'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { InputSwitchModule } from 'primeng/inputswitch'
import { provideAnimations } from '@angular/platform-browser/animations'
import { AccordionModule } from 'primeng/accordion'
import { ProjectCardComponent } from './features/projects/project-card/project-card.component'
import { NgOptimizedImage } from '@angular/common'
import { ProgressBarModule } from 'primeng/progressbar'
import { SplitterModule } from 'primeng/splitter'
import { CarouselModule } from 'primeng/carousel'
import { GalleriaModule } from 'primeng/galleria'
import { CareerComponent } from './features/career/career.component'
import { StepperModule } from 'primeng/stepper'
import { PanelModule } from 'primeng/panel'

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        MenuComponent,
        ContactComponent,
        PageNotFoundComponent,
        CareerComponent,
        ProjectsComponent,
        HomeComponent,
        HobbiesComponent,
        ProjectCardComponent,
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
    CardModule,
    AvatarModule,
    InputSwitchModule,
    FormsModule,
    AccordionModule,
    NgOptimizedImage,
    ProgressBarModule,
    SplitterModule,
    CarouselModule,
    GalleriaModule,
    StepperModule,
    PanelModule,
  ],
    providers: [provideAnimations()],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(library: FaIconLibrary) {
        // Add multiple icons to the library
        library.addIconPacks(fas)
    }
}
