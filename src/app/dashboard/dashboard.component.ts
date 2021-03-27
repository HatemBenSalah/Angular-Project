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
    this.routeur.navigate(['table/create']);
    this.servicename="najar";
    localStorage.setItem('servicename',this.servicename)
  
    
  } 
  peintureCliked() {
    this.servicename="daheen";
   localStorage.removeItem('servicename');
    localStorage.setItem('servicename',this.servicename)
  
    this.routeur.navigate(['table/create']);
    
  } 
  plombierCliked() {
    this.routeur.navigate(['table/create']);
    
  } 
  parabolisteCliked() {
    this.routeur.navigate(['table/create']);
    
  } 
  minusierCliked() {
    this.routeur.navigate(['table/create']);
    
  } 
  maconCliked() {
    this.routeur.navigate(['table/create']);
    
  } 
  jardinierCliked() {
    this.routeur.navigate(['table/create']);
    
  } 
}