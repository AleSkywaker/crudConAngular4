import { Component } from '@angular/core';

@Component({
    selector: 'error',
    templateUrl: '../views/error.html'
})

export class ErrorComponent{
   public titulo:string;
   constructor(){
       this.titulo = 'Error!!!! Pagina no encotrada ';
   }

   ngOnIniti(){
       console.log('component error cargado');
       
   }

}