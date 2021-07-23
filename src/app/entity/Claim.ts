import { Commande } from "./Commande";
import { Employee } from "./Employee";
import { User } from "./User";

export class Claim {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    adresse: string;
    nameservice: string;
    claimdescription: string;
    phone :number;
    acceptationdate:Date;
    active: boolean;
    datedemmande:Date;
    state:String;
    employee:Employee;
    user:User;
    commande:Commande;
    interventionstate:string;
}