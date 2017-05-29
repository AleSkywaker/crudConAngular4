import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';




@Component({
    selector: 'poductos-list',
    templateUrl: '../views/productos-list.html'
})

export class ProductosListComponent{

     public titulo:string;

     constructor(
         private _route: ActivatedRoute,
         private _router: Router
     ){
     this.titulo = 'Listado de productos';
    }
    
    ngOnInit(){
   console.log('porductos.list.component.ts cargado');
   

    }
}