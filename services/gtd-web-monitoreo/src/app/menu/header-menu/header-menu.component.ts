import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'gtd-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  public userMenu = [{ title: 'Perfil', data: 'profile' }, { title: 'Cerrar Sesión', data: 'log-out' }];
  public user: any;
  constructor(
    private sidebarService: NbSidebarService,
    private themeService: NbThemeService,
  
  ) { }

  ngOnInit() {
    this.user = 'Brandux Juarez';
    this.themeService.changeTheme('lamb-grapevine');
  }

  
  public toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }


}
