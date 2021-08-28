import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      //ViewContainerRef: is used to render a template with createEmbeddedView method
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      //or destroy a template with clear method
      this.vcRef.clear();
    }
  }
  //TemplateRef: can be used to render a template as an argument to ViewContainerRef
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
