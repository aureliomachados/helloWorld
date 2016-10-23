import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponenteComponent } from './meu-primeiro-componente/meu-primeiro-componente.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

import { CursoService } from './curso.service';
import { UserService } from './user.service';
import { RepositoryService } from './repository.service';

import { CursosComponent } from './cursos/cursos.component';
import { UsersComponent } from './users/users.component';
import { RepositoriesComponent } from './repositories/repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponenteComponent,
    NotFoundComponent,
    HomePageComponent,
    CursosComponent,
    UsersComponent,
    RepositoriesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'cursos', component: CursosComponent },
      { path: 'users', component: UsersComponent },
      { path: 'repositories', component: RepositoriesComponent },
      { path: 'meuprimeirocomponente', component: MeuPrimeiroComponenteComponent },
      { path: '', component: HomePageComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [ CursoService, UserService, RepositoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
