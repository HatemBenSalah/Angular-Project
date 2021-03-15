import { Component, OnInit, Input } from '@angular/core';
import { CommandeListComponent } from '../commande-list/commande-list.component';
import { Commande } from 'src/app/components/Commande';
import { CommandeService } from 'src/app/components/commande.service';

@Component({
  selector: 'app-commande-details',
  templateUrl: './commande-details.component.html',
  styleUrls: ['./commande-details.component.css']
})
export class CommandeDetailsComponent implements OnInit {

  @Input() commande: Commande;

  constructor(private commandeService: CommandeService, private listComponent: CommandeListComponent) { }

  ngOnInit() {
  }
}