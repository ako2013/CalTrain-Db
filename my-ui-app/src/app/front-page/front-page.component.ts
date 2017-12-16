import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  myStyle: object = {};
	myParams: object = {};
	width: number = 100;
	height: number = 100;

  constructor() { }

  ngOnInit() {
    this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };

    this.myParams = {
              particles: {
                  number: {
                      value: 50,
                  },
                  color: {
                      value: '#3e86f9'
                  },
                  shape: {
                      type: 'circle',
                  },
                  line_linked: {
                      enable: true,
                      color: '#727984'
                  },
                  size: {
                    value: 3,
                  },
                  move: {
                    enable: true,
                    speed: 3,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: true,
                    attract: {
                        enable: false,
                        rotateX: 3000,
                        rotateY: 3000
                    }
                },
              }
    };
  }

}
