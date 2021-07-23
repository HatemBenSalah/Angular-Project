import { Observable } from "rxjs";
import { Component, OnInit,Input } from "@angular/core";
import { CommandeService } from 'src/app/service/commande.service';
import { Commande } from 'src/app/entity/Commande';
import { TokenStorageService } from 'src/app/service/TokenStorageService';
import{User} from 'src/app/entity/User';
import { Console } from "console";

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
    { name: "General masonry", value: 4 },
    { name: "Penture", value: 5 },
    { name: "Electricite", value: 6 },
    { name: "Charpenterie", value: 7 },
    { name: "Menage", value: 8 }
  ]
  commandes: Commande[];
  CommandeToEdit:any={};
  savedToEditCommande:any={};
  user:User =new User();
  constructor(private CommandeService: CommandeService , private tokenStorageService :TokenStorageService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
   
    this.CommandeService.getCommande(this.tokenStorageService.getUser().id).subscribe(data => {
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
    this.savedToEditCommande =cm ;
    Object.assign(this.CommandeToEdit, cm);
    this.edition=true;
  }
  createClaim(cm){
   this.tokenStorageService.saveCommande(cm);
  }
  done(){
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
  cancelEditCommand(){
    this.edition=false;
  }
  DisableClaim( state ){
    if(state.Match("Accepted"))
    return true;
    else
    return false;
  }
  
  
}
