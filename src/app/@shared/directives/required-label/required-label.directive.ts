import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormController } from '@shared.common/FormControls';

@Directive({
  selector: '[requiredLabel]'
})
export class RequiredLabelDirective implements OnInit {

  private formGroup!: FormGroup;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    const parent = this.renderer.parentNode(this.el.nativeElement);
    // console.log(this.el.nativeElement)
    if (parent.getElementsByTagName('LABEL').length && !parent.getElementsByClassName('required-asterisk').length) {
        console.log(parent.getElementsByTagName('LABEL')[0].innerHTML)
        parent.getElementsByTagName('LABEL')[0].innerHTML += '<span class="required-asterisk">*</span>';
    }
  }

  getRequiredFields(form: FormGroup){
    this.formGroup = form;
    const formConrolName:string = this.el.nativeElement.htmlFor;
    console.log(this.el.nativeElement.htmlFor);
    console.log(this.el.nativeElement);
    console.log(this.formGroup.get(formConrolName));
    if(this.formGroup.get(formConrolName)?.errors != null){
      if(this.formGroup.get(formConrolName)?.errors && this.formGroup.get(formConrolName)?.errors?.['required']){
        return this.el.nativeElement.innerText.replace('*', '');
      }
    }
  }

}
