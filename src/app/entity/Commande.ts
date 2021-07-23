import { Employee } from "./Employee";
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
    employee:Employee;
    state:String;
    datedemmande:Date;
    acceptationdate:Date;
    interventionstate:string;

}