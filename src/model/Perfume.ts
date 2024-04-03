import { Produto } from "./Produto";

export class Perfume extends Produto {
    marca: string;
    
    constructor(id: number, nome: string, tipo: number, preco: number, marca: string) {
        super(id, nome, tipo, preco);
        this.marca = marca;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Marca: ${this.marca}`);
    }
}
