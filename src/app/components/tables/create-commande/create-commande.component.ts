import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/entity/Commande';
import { CommandeService } from 'src/app/service/commande.service';

@Component({
  selector: 'app-create-commande',
  templateUrl: './create-commande.component.html',
  styleUrls: ['./create-commande.component.css']
})
export class CreateCommandeComponent implements OnInit {

  commande: Commande = new Commande();
  options = [
    { name: "Plomberie", value: 1 },
    { name: "Jardinage", value: 2 },
    { name: "Paraboliste", value: 3 },
    { name: "Maçonnerie générale", value: 4 },
    { name: "Penture", value: 5 },
    { name: "Électricité", value: 6 },
    { name: "Charpenterie", value: 7 }
  ]
  submitted = false;

  constructor(private commandeService: CommandeService) { }

  ngOnInit() {
  }

  newCommande(): void {
    this.commande.nameservice=localStorage.getItem('servicename');
    this.submitted = false;
    this.commande = new Commande();
  }

  save() {
    this.commandeService.createCommande(this.commande)
      .subscribe(data => {
        this.commande = new Commande();
      });
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}