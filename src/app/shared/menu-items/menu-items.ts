import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Home',
    main: [
      {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      }
    ],
  },
  
  {
    label: 'Commandes',
    main: [
      {
        state: 'table',
        name: 'Options ',
        type: 'sub',
        icon: 'ti-receipt',
        children: [
          {
            state: 'createCommande',
            type: 'link',
            name: 'Create Commande',
          }, {
            state: 'ListCommande',
            type: 'link',
            name: ' List Commande',
          },
          
         {
          state: 'ListClaim',
          type: 'link',
          name: 'Claim List',
        }
      
        ]
      }
    ]
  },
  
  
  {
    label: 'Company Location',
    main: [
      {
        state: 'map',
        name: 'Maps',
        type: 'link',
        icon: 'ti-map-alt'
      }
    ]
  },
  {
    label: 'About Us',
    main: [
      {
        state: 'map',
        name: 'HMS',
        type: 'link',
        icon: 'ti-map-alt'
      }
    ]
  }
   
 
  
  
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

}
