export class Paiment{
    public numeroContrat: number;
    public numeroTelephone: number;
    public montant: number;
    
    constructor(numeroContrat: number,numeroTelephone: number,montant: number){
        this.numeroContrat = numeroContrat;
        this.numeroTelephone = numeroTelephone;
        this.montant = montant;
    }
}