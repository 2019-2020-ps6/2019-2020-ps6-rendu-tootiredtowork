import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, Renderer2, ViewChildren, QueryList, ChangeDetectorRef, ChangeDetectionStrategy, ComponentFactoryResolver, Type } from '@angular/core';
import { AnimationBuilder, AnimationFactory, animate, style, AnimationPlayer } from '@angular/animations';
import { CarouselItemDirective } from './carousel-item.directive';
import { CarouselItemComponent } from './carousel-item.component';
import { CarouselAddComponent } from './carousel-add/carousel-add.component';

/**
 * Component du carousel
 */
@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit, AfterViewInit {
    @ViewChild('carousel', { read: ElementRef, static: false }) carousel: ElementRef;
    @ViewChild('slideshow', { read: ElementRef, static: false }) slideShow: ElementRef;
    @ViewChild(CarouselItemDirective, { static: true }) mockHost: CarouselItemDirective;
    @ViewChildren(CarouselItemDirective) itemsDirective!: QueryList<CarouselItemDirective>;

    mockRef: ElementRef;

    _items: any[] = [];

    @Input()
    component: Type<CarouselItemComponent>;

    /**
     * On intercepte le changement de données. Si le max a déjà été calculé, on remplis les slides en fonction.
     */
    @Input() set items(items: any[]) {
        if (items != null) {
            this._items = new Array<any>();
            items.forEach((item) => {
                this._items.push(item);
            });
            if (this._add != null) this._items.push(this._add);
            if (this.maxCalculated) this.fillSlides();
        }
    }

    @Input()
    mock: any;

    _add: Function = null;
    @Input() set add(func: Function) {
        if (this._add == null && func != null) {
            this._add = func;
            if (this._items.length == 0) this._items.push(func);
            else if (this._items[this._items.length - 1] != func) this._items.push(func);
        }
    }

    slides = new Array<Array<any>>();

    currentSlide = 0;
    private slideWidth: number;
    private player: AnimationPlayer;

    private nbMaxElements: number = 1;
    private maxCalculated: boolean = false;

    private itemHeight: number;
    private itemWidth: number;

    constructor(private builder: AnimationBuilder, private renderer: Renderer2, private cd: ChangeDetectorRef, private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit(): void {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);

        const viewContainerRef = this.mockHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<CarouselItemComponent>componentRef.instance).data = this.mock;
        this.mockRef = componentRef.location;
    }

    ngAfterViewInit(): void {
        this.slideWidth = this.carousel.nativeElement.offsetWidth;
        if (!this.maxCalculated) {
            this.itemHeight = this.mockRef.nativeElement.offsetHeight;
            this.itemWidth = this.mockRef.nativeElement.offsetWidth;
            this.nbMaxElements = this.numberElementsBySlide(this.carousel.nativeElement.offsetHeight, this.carousel.nativeElement.offsetWidth, this.itemHeight, this.itemWidth);
            this.renderer.setStyle(this.mockRef.nativeElement, 'display', 'none');
            this.maxCalculated = true;
            if (this._items.length > 0) {
                this.fillSlides();
                this.cd.detectChanges();
                this.loadComponent();
                this.cd.detectChanges();
            }
        }

        this.itemsDirective.changes.subscribe((v) => {
            this.loadComponent();
            this.cd.detectChanges();
        })
    }

    /**
     * Renvoie le nombre maximum d'éléments par slide
     * @param parentH - Hateur du parent
     * @param parentW - Largeur du parent
     * @param childH - Hauteur du fils
     * @param childW - Largeur du fils
     */
    numberElementsBySlide(parentH: number, parentW: number, childH: number, childW: number): number {
        return Math.floor(parentH / childH) * Math.floor(parentW / childW);
    }

    /**
     * Remplit les slides en fonction du nombre maximum d'éléments par slide. 
     * O(n²) => complexité abominable, donc à revoir si il reste du temps
     */
    fillSlides() {
        if (this.nbMaxElements > 0) {
            this.slides = new Array<Array<any>>();
            for (var i = 0; i < Math.ceil(this._items.length / this.nbMaxElements); i++) {
                let tab = new Array<any>();
                for (var j = i * this.nbMaxElements; j < (i + 1) * this.nbMaxElements && j < this._items.length; j++) {
                    tab.push(this._items[j]);
                }
                this.slides.push(tab);
            }
        }
    }

    /**
     * Méthode appelée lorsque demande la page suivante
     */
    next() {
        if (this.currentSlide + 1 == this.slides.length) return;
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        const offset = this.currentSlide * this.slideWidth;

        const myAnimation: AnimationFactory = this.builder.build([
            animate('250ms ease-in', style({ transform: `translateX(-${offset}px)` }))
        ]);

        this.player = myAnimation.create(this.slideShow.nativeElement);
        this.player.play();
    }

    /**
    * Méthode appelée lorsque demande la page précèdente
    */
    prev() {
        if (this.currentSlide == 0) return;

        this.currentSlide = ((this.currentSlide - 1) + this.slides.length) % this.slides.length;
        const offset = this.currentSlide * this.slideWidth;

        const myAnimation: AnimationFactory = this.builder.build([
            animate('250ms ease-in', style({ transform: `translateX(-${offset}px)` }))
        ]);

        this.player = myAnimation.create(this.slideShow.nativeElement);
        this.player.play();
    }

    /**
     * Pour chaque item à afficher, charge le type de component donée en input
     */
    loadComponent() {
        if (this.itemsDirective.length > 0 && this._items.length > 0) {
            for (var i = 0; i < this._items.length; i++) {
                var component = this.component;
                if (this._items[i] == this._add) component = CarouselAddComponent;
                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

                // i+1 ici car le mock fait parti des itemsDirective
                const viewContainerRef = this.itemsDirective.toArray()[i + 1].viewContainerRef;
                viewContainerRef.clear();

                const componentRef = viewContainerRef.createComponent(componentFactory);
                this.renderer.setStyle(componentRef.location.nativeElement, 'height', this.itemHeight + 'px');
                this.renderer.setStyle(componentRef.location.nativeElement, 'width', this.itemWidth + 'px');
                (<CarouselItemComponent>componentRef.instance).data = this._items[i];
            }
        }
    }
}