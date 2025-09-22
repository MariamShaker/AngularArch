import { Component, Input, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
 @Input() type:string = 'button';
 @Input() color:string = 'primary';
 @Input() disabled:boolean = false;
}
