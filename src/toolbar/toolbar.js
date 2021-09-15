"use strict";
class Toolbar {
    constructor(startImage) {
        this.startImage = startImage;
        this.recognizing = false;
    }
    startButton(event) {
        if (!this.recognizing) {
            console.log('start', this.recognizing);
            this.startImage.src = '../../assets/mic/mic-animate.gif';
        }
        else {
            this.startImage.src = '../../assets/mic/mic.gif';
        }
        this.recognizing = !this.recognizing;
    }
}
const startImage = document.getElementById('start_img');
const toolbarMenu = new Toolbar(startImage);
