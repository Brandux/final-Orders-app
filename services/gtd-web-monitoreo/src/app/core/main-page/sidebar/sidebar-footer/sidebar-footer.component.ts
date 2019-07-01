import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'gtd-sidebar-footer',
  templateUrl: './sidebar-footer.component.html',
  styleUrls: ['./sidebar-footer.component.scss']
})
export class SidebarFooterComponent implements OnInit {

  public userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit() {
  }

  get year() {
    return '2019';
  }
  get devTeam() {
    return 'GTD Team G1';
  }

  get version() {
    return '2.0.0';
  }
  get envName() {
    return 'dev';
  }
  get isProd() {
    return false;
  }
  public toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

}
