export class Compte{
    public rib: string;
    public dateCreation: string;
    public sold: number;
    public virementsEnvoyes: string[];
    public virementsRecus: string[];
    public paiementServices: string[];

    constructor(rib: string,dateCreation: string, sold: number, virementsEnvoyes: string[], virementsRecus: string[], paiementServices: string[]){
        this.rib = rib;
        this.dateCreation = dateCreation;
        this.sold = sold;
        this.virementsEnvoyes = virementsEnvoyes;
        this.virementsRecus = virementsRecus;
        this.paiementServices = paiementServices;
    }
}