import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



//Rutas
import { routing, appRoutingProviders } from './app.routing';




//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.components';
import { ErrorComponent } from './components/error.components';
import { ProductosListComponent } from './components/productos-list.components';
import { ProductoAddComponent } from './components/producto-add.components';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosListComponent,
    ProductoAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
