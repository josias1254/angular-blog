import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewsComponent } from './components/news/news.component';
import { PostsComponent } from './components/posts/posts.component';
import { GigaCardComponent } from './components/giga-card/giga-card.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './pages/home/home.component';
import { ConteudoComponent } from './pages/conteudo/conteudo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NewsComponent,
    PostsComponent,
    GigaCardComponent,
    CardsComponent,
    HomeComponent,
    ConteudoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
