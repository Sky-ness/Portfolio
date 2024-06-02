import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactComponent } from './features/contact/contact.component'
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component'
import { HomeComponent } from './features/home/home.component'
import { ProjectsComponent } from './features/projects/projects.component'
import { CareerComponent } from './features/career/career.component'
import { HobbiesComponent } from './features/hobbies/hobbies.component'

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'projects',
        component: ProjectsComponent,
    },
    {
        path: 'career',
        component: CareerComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'hobbies',
        component: HobbiesComponent,
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
