import { Component, inject, OnInit, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule, ToolbarComponent, MatListModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit{
  @ViewChild('drawer') drawer!: MatSidenav; 

  isScreenSmall: boolean = false;

  toggleDrawer(): void {
    this.drawer.toggle();
  }
  closeSideNav(): void{
    this.drawer.close();
  }

  private breakpointObserver = inject(BreakpointObserver)
  ngOnInit(): void {
    this.breakpointObserver.observe([`(max-width: 720px)`]).subscribe((state: BreakpointState) => {
      this.isScreenSmall = state.matches;

      if (this.isScreenSmall) {
        this.drawer.close(); 
      } else {
        this.drawer.open(); 
      }
    });
  }
}
