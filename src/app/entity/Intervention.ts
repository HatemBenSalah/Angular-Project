import { Claim } from "./Claim";
import { Commande } from "./Commande";
import { Employee } from "./Employee";
import { User } from "./User";

export class Intervention {
    IdIntervention: number;
    firstName: string;
    lastName: string;
    email: string;
    adresse: string;
    nameservice: string;
    phone :number;
    acceptationdate:Date;
    pannedescription:string;
    interventiondescription:string;
    interventionstate:string;
    dateintervention:Date;
    active: boolean;
    datedemmande:Date;
    state:String;
    employee:Employee;
    claim:Claim;
    user:User;
    commande:Commande;

}