export class Organisme{
    public id: number;
    public nom: string;
    public rib: string;

    constructor(id: number, nom: string, rib: string){
        this.id = id;
        this.nom = nom;
        this.rib = rib;
    }
}