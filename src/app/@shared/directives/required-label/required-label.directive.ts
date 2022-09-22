import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[requiredLabel]'
})
export class RequiredLabelDirective implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    const parent = this.renderer.parentNode(this.el.nativeElement);
    console.log(this.el.nativeElement)
    if (parent.getElementsByTagName('LABEL').length && !parent.getElementsByClassName('required-asterisk').length) {
        console.log(parent.getElementsByTagName('LABEL')[0].innerHTML)
        parent.getElementsByTagName('LABEL')[0].innerHTML += '<span class="required-asterisk">*</span>';
    }
  }

}
