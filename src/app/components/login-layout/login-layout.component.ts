import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [

  ],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.scss'
})
export class LoginLayoutComponent {
  @Input() title:string = '';
  @Input() primaryBtnText: string = '';
  @Input() disablePrimaryBtn: boolean = true;
  @Input() secondaryBtnText: string = '';
  @Output('submit') onSubmit = new EventEmitter();

  @Output('navigate') onNavigate = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit()
  }
}
