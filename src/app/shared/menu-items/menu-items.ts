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
    label: 'Navigation',
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
    label: 'Tables',
    main: [
      {
        state: 'bootstrap-table',
        name: ' List Commande ',
        type: 'link',
        icon: 'ti-receipt'
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
    label: 'Pages',
    main: [
      {
        state: 'auth',
        short_label: 'A',
        name: 'Authentication',
        type: 'sub',
        icon: 'ti-id-badge',
        children: [
          {
            state: 'login',
            type: 'link',
            name: 'Login',
            target: true
          }, {
            state: 'registration',
            type: 'link',
            name: 'Registration',
            target: true
          }
        ]
      }
    ]
  },
  
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
