import { Component, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule, ToolbarComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  @ViewChild('drawer') drawer!: MatSidenav; 
  
  toggleDrawer(): void {
    this.drawer.toggle();
  }

}
