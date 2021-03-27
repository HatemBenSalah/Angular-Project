import { Observable } from "rxjs";
import { Component, OnInit,Input } from "@angular/core";
import { CommandeService } from 'src/app/service/commande.service';
import { Commande } from 'src/app/entity/Commande';

@Component({
  selector: "app-commande-list",
  templateUrl: "./commande-list.component.html",
  styleUrls: ["./commande-list.component.css"]
})
export class CommandeListComponent implements OnInit {
 edition:boolean=false;
 edition2:boolean=false;
  refrech:boolean;
  options = [
    { name: "Plomberie", value: 1 },
    { name: "Jardinage", value: 2 },
    { name: "Plomberie", value: 3 },
    { name: "Maçonnerie générale", value: 4 },
    { name: "Penture", value: 5 },
    { name: "Électricité", value: 6 }
  ]
  commandes: Commande[];
  CommandeToEdit:any={};
  savedToEditCommande:any={};
  
  constructor(private CommandeService: CommandeService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.CommandeService.getCommande().subscribe(data => {
      this.commandes = data;
    });
  }

  deleteCommande(id: number) {
   this.refrech=true;
    this.CommandeService.deleteCommande(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        });
  }
  EditCommande(cm)
  {
    console.log(cm)
    this.savedToEditCommande =cm ;
    Object.assign(this.CommandeToEdit, cm);
    this.edition=true;
    
    

  }
  done(){
    console.log(this.CommandeToEdit)
   
    console.log(this.savedToEditCommande)
    this.edition=false;
    this.CommandeService.updateCommande(this.CommandeToEdit).subscribe(data =>{
      if(data == true){
        let x = this.commandes.indexOf(this.savedToEditCommande);
        this.commandes[x] = this.CommandeToEdit;
      }else{
        console.log("ghalta")
      }
      
    });

  }
  
  
}