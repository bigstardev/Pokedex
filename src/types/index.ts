export class PokemenData {
    id: number;
    name: string;
    weight: number;
    height: number;
    sprite: string;
    types: [];

    constructor() {
        this.id = 0;
        this.name = '';
        this.weight = 0;
        this.height = 0;
        this.sprite = '';
        this.types = [];
    }
}
