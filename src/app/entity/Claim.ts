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
    user:User;
    active: boolean;
    datedemmande:Date;
    state:String;
}