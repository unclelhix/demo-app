import { AbstractControl } from "@angular/forms";

export interface FormController{
  fC(name: string): AbstractControl<any, any>;
}
