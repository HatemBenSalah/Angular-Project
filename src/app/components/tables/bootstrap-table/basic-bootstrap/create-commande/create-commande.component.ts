import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/components/Commande';
import { CommandeService } from 'src/app/components/commande.service';

@Component({
  selector: 'app-create-commande',
  templateUrl: './create-commande.component.html',
  styleUrls: ['./create-commande.component.css']
})
export class CreateCommandeComponent implements OnInit {

  commande: Commande = new Commande();
  submitted = false;

  constructor(private commandeService: CommandeService) { }

  ngOnInit() {
  }

  newCommande(): void {
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