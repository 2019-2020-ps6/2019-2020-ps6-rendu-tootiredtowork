import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
	selector: 'app-colorpicker',
	templateUrl: './colorPicker.component.html',
	styleUrls: ['./colorPicker.component.scss']
})
export class ColorPickerComponent implements OnInit {

	defaultBackground: string;
	defaultBoxe: string;
	defaultText: string;

	constructor(public configService: ConfigurationService) {

	}


	ngOnInit() {
		this.defaultBackground = this.configService.background;
		this.defaultBoxe = this.configService.boxe;
		this.defaultText = this.configService.text;

		let selected = <HTMLElement>document.body.querySelector(".selected");
		let container = <HTMLElement>document.body.querySelector(".options-container");

		let optionList = document.body.querySelectorAll(".option");
		selected.addEventListener("click", () => { container.classList.toggle("active") });

		optionList.forEach(o => {
			o.addEventListener("click", () => {
				if (selected.lastChild != null) {
					selected.removeChild(selected.lastChild);
				}
				let element = o.querySelector("div").cloneNode(true);
				selected.appendChild(element);
				container.classList.toggle("active");
			})
		})

	}

	changeColor(background: string, boxe: string, text: string) {
		this.configService.background = background;
		this.configService.boxe = boxe;
		this.configService.text = text;
		let shand = document.querySelector('body') as HTMLElement;
		if (background == "3c3c3c") {
			shand.style.background = "linear-gradient(to right, #" + (parseInt(background, 16) + parseInt("010001", 16)).toString(16) + ", #" + background + ")";
		} else {
			shand.style.background = "linear-gradient(to right, #" + (parseInt(background, 16) + parseInt("181818", 16)).toString(16) + ", #" + background + ")";
		}
	}

}