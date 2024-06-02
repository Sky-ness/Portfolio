import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactComponent } from './features/contact/contact.component'
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component'

const routes: Routes = [
    {
        path: 'contact',
        component: ContactComponent,
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
