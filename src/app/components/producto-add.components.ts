import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { Producto } from './../models/producto';
import { ProductoService } from './../services/producto.service';
import { GLOBAL } from './../services/global';



@Component({
    selector: 'producto-add',
    templateUrl: '../views/producto-add.html',
    providers: [ProductoService]
})

export class ProductoAddComponent {
    public titulo: string;
    public producto: Producto;
    public filesToUpload;
    public resultUpload;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ) {
        this.titulo = "Crear un nuevo producto"
        this.producto = new Producto(0, "", "", 0, "");
    }
    ngOnInit() {
        console.log('¡¡¡¡Producto-add.component cargado!!!');
    }

    onSubmit() {
        console.log(this.producto);



       if(this.filesToUpload.length >= 1){

        this._productoService.makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload).then((result) => {
            console.log(result);
            this.resultUpload = result;
            this.producto.imagen = this.resultUpload.filename;
            console.log(this.producto.imagen);
            this.saveProducto();

            }, (error) => {
            console.log(error);
            });
            }else{
            this.saveProducto(); 
            }



        
    }


    saveProducto() {
        this._productoService.addProductos(this.producto).subscribe(
            response => {
                console.log(response);
                if (response.code == 200) {
                    this._router.navigate(['/productos']);
                } else {
                    console.log(response);
                }
            },
            error => {
                console.log(<any>error);
            });


    }



    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }

}
