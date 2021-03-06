import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/entity/Commande';
import { CommandeService } from 'src/app/service/commande.service';
import{User} from 'src/app/entity/User';
import { TokenStorageService } from 'src/app/service/TokenStorageService';

@Component({
  selector: 'app-create-commande',
  templateUrl: './create-commande.component.html',
  styleUrls: ['./create-commande.component.css']
})
export class CreateCommandeComponent implements OnInit {
  user: User = new User();
  commande: Commande = new Commande();
  options = [
    { name: "Plomberie", value: 1 },
    { name: "Jardinage", value: 2 },
    { name: "Paraboliste", value: 3 },
    { name: "General masonry", value: 4 },
    { name: "Penture", value: 5 },
    { name: "Electricite", value: 6 },
    { name: "Charpenterie", value: 7 },
    { name: "Menage", value: 8 }

  ]
  submitted = false;
  message=false;

  constructor(private commandeService: CommandeService, private tokenStorageService :TokenStorageService ) { }

  ngOnInit() {
    this.user =this.tokenStorageService.getUser();
   
    
  }

  newCommande(): void {
    this.user=this.tokenStorageService.getUser();
    this.commande.nameservice=localStorage.getItem('servicename');
    
    this.submitted = false;
    
    this.commande = new Commande();
  }

  save() {
    let localtime: Date = new Date();  
    this.commande.user=this.user;
    this.commande.datedemmande=localtime;
    this.commande.firstName=this.user.firstName;
    this.commande.lastName=this.user.lastName;
    this.commande.email=this.user.email;
    this.commande.firstName=this.user.firstName;



    this.commande.state="In progress";
    this.commandeService.createCommande(this.commande)
      .subscribe(data => {
        this.commande = new Commande();
      });
    
  }

  onSubmit() {
   if(this.commande.adresse==null || this.commande.pannedescription==null|| this.commande.phone==null||this.commande.nameservice==null)
   { this.message=true;}
   else{
    this.message=false;
    this.submitted = true;
    this.save();
  }
}
}