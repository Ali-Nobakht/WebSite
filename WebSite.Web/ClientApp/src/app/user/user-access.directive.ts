import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUserAccess]'
})
export class UserAccessDirective {

  accesses: string[] = ["New", "Edit"];
  @Input() set appUserAccess(btnAction: string) {
    console.log(btnAction);
    if (this.accesses.indexOf(btnAction) > -1) {
      this.vcRef.createEmbeddedView(this.templateRef)
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

}


