import { Directive, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[carousel-item-host]',
})
export class CarouselItemDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }

    ngAfterViewInit() {
    }
}