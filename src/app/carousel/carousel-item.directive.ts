import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[carousel-item-host]',
})
export class CarouselItemDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }

    ngAfterViewInit() {
    }
}