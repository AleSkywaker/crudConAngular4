import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { Producto } from './../models/producto';
import { ProductoService } from './../services/producto.service';
import { GLOBAL } from './../services/global';



@Component({
    selector: 'producto-add',
    templateUrl: '../views/producto-add.html',
    providers:[ProductoService]
})

export class ProductoAddComponent{
       public titulo:string;
       public producto: Producto;
        public filesToUpload;
       public resultUpload;

       constructor(
           private _route: ActivatedRoute,
           private _router: Router,
           private _productoService: ProductoService
       ){
           this.titulo = "Crear un nuevo producto"
           this.producto = new Producto(0, "", "", 0, "");
       }
       ngOnInit(){
           console.log('¡¡¡¡Producto-add.component cargado!!!');     
       }

       onSubmit(){
        console.log(this.producto);

         this._productoService.makeFileRequest(GLOBAL.url+'upload-file', [], this.filesToUpload).then((result)=>{
                              
                                  console.log(result);
                                  


                             }, (error)=>{
                                 console.log(error);
                                 
                             }
                             
                             )
 




           
             this._productoService.addProductos(this.producto).subscribe(
               response => {
                     console.log(response.code);
                         if(response.code == 200){ 
                         }else{
                            console.log(response); 
                        }
                         },               
                 error => {
                       console.log(<any>error);
                       
                 }
                 );
               this._router.navigate(['/productos']);


       } 

       fileChangeEvent(fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;
		console.log(this.filesToUpload);
	}
      
}
