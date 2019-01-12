export class Virement{
    public id: number;
    public montant: number;
    public dateVirement: string;

    constructor(id:number, montant:number,dateVirement:string){
        this.id = id;
        this.montant = montant;
        this.dateVirement = dateVirement;
    }
}