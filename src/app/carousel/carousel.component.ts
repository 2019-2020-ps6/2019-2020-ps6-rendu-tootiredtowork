import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, Renderer2, ViewChildren, QueryList, ChangeDetectorRef, ChangeDetectionStrategy, ComponentFactoryResolver, Type } from '@angular/core';
import { AnimationBuilder, AnimationFactory, animate, style, AnimationPlayer } from '@angular/animations';
import { QuizComponent } from '../quizzes/quiz/quiz.component';
import { Quiz } from 'src/models/quiz.model';
import { QUIZ } from 'src/mocks/quiz.mock';
import { CarouselItemDirective } from './carousel-item.directive';
import { CarouselItemComponent } from './carousel-item.component';

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

    quizMockRef: ElementRef;

    _items: any[] = [];

    @Input()
    component: Type<CarouselItemComponent>;

    /**
     * On intercepte le changement de données. Si le max a déjà été calculé, on remplis les slides en fonction.
     */
    @Input() set items(items: any[]) {
        if (items != null) {
            this._items = items;
            if (this.maxCalculated) this.fillSlides();
            else {
                var first = new Array<any>();
                first.push(items[0]);
                this.slides.push(first);
            }
        }
    }

    @Input()
    mock: any;

    slides = new Array<Array<any>>();

    private currentSlide = 0;
    private slideWidth: number;
    private player: AnimationPlayer;

    private nbMaxElements: number = 1;
    private maxCalculated: boolean = false;

    constructor(private builder: AnimationBuilder, private renderer: Renderer2, private cd: ChangeDetectorRef, private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit(): void {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);

        const viewContainerRef = this.mockHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<CarouselItemComponent>componentRef.instance).data = this.mock;
        this.quizMockRef = componentRef.location;
    }

    ngAfterViewInit(): void {
        this.slideWidth = this.carousel.nativeElement.offsetWidth;
        if (!this.maxCalculated) {
            var height = this.quizMockRef.nativeElement.offsetHeight;
            var width = this.quizMockRef.nativeElement.offsetWidth;
            this.nbMaxElements = this.numberElementsBySlide(this.carousel.nativeElement.offsetHeight, this.carousel.nativeElement.offsetWidth, height, width);
            this.renderer.setStyle(this.quizMockRef.nativeElement, 'display', 'none');
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

    numberElementsBySlide(parentH: number, parentW: number, childH: number, childW: number): number {
        return Math.floor(parentH / childH) * Math.floor(parentW / childW);
    }

    /**
     * Remplit les slides en fonction du nombre maximum d'éléments par slide. 
     * O(n²) => complexité abominable, donc à revoir si il reste du temps
     */
    fillSlides() {
        this.slides = new Array<Array<any>>();
        for (var i = 0; i < Math.ceil(this._items.length / this.nbMaxElements); i++) {
            let tab = new Array<any>();
            for (var j = i * this.nbMaxElements; j < (i + 1) * this.nbMaxElements && j < this._items.length; j++) {
                tab.push(this._items[j]);
            }
            this.slides.push(tab);
        }
    }

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

    loadComponent() {
        if (this.itemsDirective.length > 0 && this._items.length > 0) {
            for (var i = 0; i < this._items.length; i++) {
                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);

                // i+1 ici car le mock fait parti des itemsDirective
                const viewContainerRef = this.itemsDirective.toArray()[i + 1].viewContainerRef;
                viewContainerRef.clear();

                const componentRef = viewContainerRef.createComponent(componentFactory);
                (<CarouselItemComponent>componentRef.instance).data = this._items[i];
            }
        }
    }
}