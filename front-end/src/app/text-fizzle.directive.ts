import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

const FIZZLE_TEXT_CLASS = 'fizzle-text';

@Directive({
  selector: '[hcTextFizzle]'
})
export class TextFizzleDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  fizzleText() {
    this.renderer.addClass(this.element.nativeElement, FIZZLE_TEXT_CLASS);

    setTimeout(() => this.renderer.removeClass(this.element.nativeElement, FIZZLE_TEXT_CLASS), 2000);
  }
}
