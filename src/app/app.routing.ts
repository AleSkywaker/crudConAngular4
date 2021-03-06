import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Components
import { HomeComponent } from './components/home.components';
import { ErrorComponent } from './components/error.components';
import { ProductosListComponent } from './components/productos-list.components';
import { ProductoAddComponent } from './components/producto-add.components';

const appRoutes : Routes = [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'productos', component: ProductosListComponent },
      {path: 'addproducto', component: ProductoAddComponent },
      {path: '**', component: ErrorComponent},
];

export const appRoutingProviders:any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


