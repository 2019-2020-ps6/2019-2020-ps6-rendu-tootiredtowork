import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfigurationService } from 'src/services/configuration.service';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorPicker.component.html',
  styleUrls: ['./colorPicker.component.scss']
})
export class ColorPickerComponent implements OnInit {

	defaultBackground : number;
	defaultBoxe : number;
	defaultText : number;

  constructor(public configService: ConfigurationService) {

  }


  ngOnInit() {
  	this.defaultBackground = this.configService.background;
  	this.defaultBoxe = this.configService.boxe;
  	this.defaultText = this.configService.text;

  	let selected = <HTMLElement>document.body.querySelector(".selected");
  	let container = <HTMLElement>document.body.querySelector(".options-container");

  	let optionList =  document.body.querySelectorAll(".option");
  	selected.addEventListener("click", () => {container.classList.toggle("active") });

  	optionList.forEach ( o => {
  		o.addEventListener("click", () => {
  			if(selected.lastChild != null){
  				selected.removeChild(selected.lastChild);
  			}
  			let element=o.querySelector("div").cloneNode(true);
  			selected.appendChild(element);
  			container.classList.toggle("active");
  		})
  	})

  }
}