import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { Command } from 'protractor';
import { Commande } from '../entity/Commande';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  constructor(private routeur:Router) {}

  ngOnInit() {
  }
public servicename : string;
  electricienCliked() {
    this.routeur.navigate(['table/createCommande']);
    this.servicename="najar";
    localStorage.setItem('servicename',this.servicename)
  
    
  } 
  peintureCliked() {
    this.servicename="daheen";
   localStorage.removeItem('servicename');
    localStorage.setItem('servicename',this.servicename)
  
    this.routeur.navigate(['table/createCommande']);
    
  } 
  plombierCliked() {
    this.routeur.navigate(['table/createCommande']);
    
  } 
  parabolisteCliked() {
    this.routeur.navigate(['table/createCommande']);
    
  } 
  minusierCliked() {
    this.routeur.navigate(['table/createCommande']);
    
  } 
  maconCliked() {
    this.routeur.navigate(['table/createCommande']);
    
  } 
  jardinierCliked() {
    this.routeur.navigate(['table/createCommande']);
    
  } 
}