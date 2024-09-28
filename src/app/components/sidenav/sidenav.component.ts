import { Component, inject, OnInit, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule, ToolbarComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit{
  @ViewChild('drawer') drawer!: MatSidenav; 

  isScreenSmall: boolean = false;

  toggleDrawer(): void {
    this.drawer.toggle();
  }

  private breakpointObserver = inject(BreakpointObserver)
  ngOnInit(): void {
    this.breakpointObserver.observe([`max-width : 720px`]).subscribe((state: BreakpointState) => {
     this.isScreenSmall = state.matches
    })
  }
}
