import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderTopComponent } from './shared/header-top/header-top.component';
import { HeaderBottomComponent } from './shared/header-bottom/header-bottom.component';
import { ContainerHeaderComponent } from './shared/container-header/container-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContainerProdutosComponent } from './shared/container-produtos/container-produtos.component';
import { ProdutosCabecalhoComponent } from './shared/produtos-cabecalho/produtos-cabecalho.component';
import { ProdutosFiltrosComponent } from './shared/produtos-filtros/produtos-filtros.component';
import { ProdutosResultadosComponent } from './shared/produtos-resultados/produtos-resultados.component';
import { BannerCarouselComponent } from './shared/banner-carousel/banner-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    ContainerHeaderComponent,
    ProdutosComponent,
    FaqComponent,
    ContainerProdutosComponent,
    ProdutosCabecalhoComponent,
    ProdutosFiltrosComponent,
    ProdutosResultadosComponent,
    BannerCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
