import { User } from "./User";

export class Commande {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    adresse: string;
    nameservice: string;
    pannedescription: string;
    phone :number;
    active: boolean;
    user:User;
    state:String;
    datedemmande:Date;
}