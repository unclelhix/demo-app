import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCommonModule } from '@shared.common/shared-common.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedCommonModule
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule can only be imported once!');
    }
  }

}
