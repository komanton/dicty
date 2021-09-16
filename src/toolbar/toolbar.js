"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Toolbar {
    constructor(startImage, getSocket) {
        this.startImage = startImage;
        this.getSocket = getSocket;
        this.recognizing = false;
    }
    startButton(event) {
        console.log(event);
        if (!this.recognizing) {
            console.log('start', this.recognizing);
            this.startImage.src = '../../assets/mic/mic-animate.gif';
            this.getSocket().send(JSON.stringify({
                headers: { type: 'start-stop' },
                body: { isStarted: true }
            }));
        }
        else {
            this.startImage.src = '../../assets/mic/mic.gif';
            this.getSocket().send(JSON.stringify({
                headers: { type: 'start-stop' },
                body: { isStarted: false }
            }));
        }
        this.recognizing = !this.recognizing;
    }
}
let socket = new WebSocket("ws://localhost:5857");
;
const getSocket = () => {
    // if (!socket) {
    //   socket = new WebSocket("ws://localhost:5857");
    // }
    return socket;
};
const startImage = document.getElementById('start_img');
const toolbarMenu = new Toolbar(startImage, getSocket);
