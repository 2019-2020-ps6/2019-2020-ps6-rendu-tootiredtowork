import { Component, OnInit, Input } from '@angular/core';
import { CarouselItemComponent } from '../carousel-item.component';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
    selector: 'app-carousel-add',
    templateUrl: './carousel-add.component.html',
    styleUrls: ['./carousel-add.component.scss']
})
export class CarouselAddComponent implements OnInit, CarouselItemComponent {
    @Input()
    data: Function;

    constructor(public configService: ConfigurationService) {
    }

    ngOnInit(): void {
    }
}