import { Component } from '@angular/core';
import { Carro } from './carro';

@Component({
    selector: 'carro',
    templateUrl: 'app/carro.template.html'
})

export class CarroComponent {
    
    carros = [
        { cor: 'prata', modelo: 'Polo', ano: '2007', placa: 'JFH-4846', quantidadeRevisao: '6' }
        
    ]
    
    carroObject = new Carro();
    edit = false;
    
    deletarCarro(index): void{
        this.carros.splice(index, 1);
    }
    
    salvarCarro(carro): void{
        this.carros.push(carro);
        this.carroObject = new Carro();
    }
    
    editarCarro(carro, persistir=false): void {
        this.edit = true;
        this.carroObject = carro;
        if (persistir){
            this.carroObject = new Carro();
            this.edit = false;
        }
    }
    
    
}
