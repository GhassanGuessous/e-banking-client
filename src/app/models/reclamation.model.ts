export class Reclamation{
    public id: number;
    public corps: string;
    public etat: string;
    public dateDepot: string;

    constructor(id: number, corps: string, etat: string, dateDepot: string){
        this.id = id;
        this.corps = corps;
        this.etat = etat;
        this.dateDepot = dateDepot;
    }
}