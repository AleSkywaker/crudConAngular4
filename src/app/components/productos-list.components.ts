import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProductoService} from '../services/producto.service';


import {Producto} from '../models/producto';

@Component({
    selector: 'poductos-list',
    templateUrl: '../views/productos-list.html',
    providers:[ProductoService]
})

export class ProductosListComponent{

     public titulo:string;
     public productos:Array<Producto>;
     /*public productos:Producto[];*/

     constructor(
         private _route: ActivatedRoute,
         private _router: Router,
         private _productoService: ProductoService
     ){
     this.titulo = 'Listado de productos';
    }
    
    ngOnInit(){
   console.log('porductos.list.component.ts cargado');

    this._productoService.getProductos().subscribe(
       result => {
         
        console.log(this.productos);
        /*console.log(result.data[0].nombre);*/
        

        if(result.code !== 200){
   
         console.log(result);
         

        }else{
         this.productos = result.data; 
         console.log(this.productos);
         /*console.log(result.data[0].nombre); */
        }

        
        
       },
       error =>{
         console.log("Error ", <any>error);
         
       }


    );
   
   
   

    }
}