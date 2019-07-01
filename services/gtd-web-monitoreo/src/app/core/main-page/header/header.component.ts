import { Component, OnInit } from '@angular/core';
import { NbMenuService, NbThemeService, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'gtd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
