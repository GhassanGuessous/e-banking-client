import {Directive, HostListener, HostBinding, Input, ElementRef, Renderer2} from '@angular/core';
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
   @Input('appDropdown') element: Element;
   constructor(private renderer: Renderer2) {}
   private isOpen = false;
 
   @HostListener('click') toggleOpen() {
     this.isOpen = !this.isOpen;
     if(this.isOpen) {
       this.renderer.addClass(this.element, 'show');
     } else {
       this.renderer.removeClass(this.element, 'show');
     }
   }
}