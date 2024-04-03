import { Produto } from "./Produto";


export class Maquiagem extends Produto {
    
    private _marca: string;

    constructor(id: number, nome: string, tipo: number, preco: number, marca: string) {
        super(id, nome, tipo, preco);
        this._marca = marca;
    }

    public get marca(): string {
        return this._marca;
    }

    public set marca(value: string) {
        this._marca = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Marca: ${this._marca}`);
    }
}
