export class SousCategorie{
    public id: number;
    public description: string;
    public categorie: string;

    constructor(id: number, description: string, categorie:string){
        this.id = id;
        this.description = description;
        this.categorie = categorie;
    }
}