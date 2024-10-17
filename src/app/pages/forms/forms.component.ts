import { Component } from '@angular/core';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { FormWithIconComponent } from './components/form-with-icon/form-with-icon.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [BasicFormComponent, FormWithIconComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

}
