import { Virement } from './virement.model';
import { Paiment } from './paiment.model';

export class Compte{
    public rib: string;
    public dateCreation: string;
    public sold: number;
    public virementsEnvoyes: Virement[];
    public virementsRecus: Virement[];
    public paiementServices: Paiment[];

    constructor(rib: string,dateCreation: string, sold: number, virementsEnvoyes: Virement[], virementsRecus: Virement[], paiementServices: Paiment[]){
        this.rib = rib;
        this.dateCreation = dateCreation;
        this.sold = sold;
        this.virementsEnvoyes = virementsEnvoyes;
        this.virementsRecus = virementsRecus;
        this.paiementServices = paiementServices;
    }
}