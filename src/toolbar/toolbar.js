"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Toolbar {
    constructor(startImage, getSocket, languageButton) {
        this.startImage = startImage;
        this.getSocket = getSocket;
        this.languageButton = languageButton;
        this.recognizing = false;
    }
    startButton(event, isStarted) {
        if (this.recognizing === isStarted) {
            return;
        }
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
    switchLanguage(event) {
        console.log(event);
    }
    setLanguage(language) {
        console.log('set language', language);
        this.languageButton.innerHTML = language
            ? language.substring(0, 2).toUpperCase() : '';
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
const languageButton = document.getElementById('language_button');
const toolbarMenu = new Toolbar(startImage, getSocket, languageButton);
socket.onmessage = function (event) {
    var message = JSON.parse(event.data);
    console.log(message);
    if (message.headers?.type === 'start-stop') {
        toolbarMenu.startButton(null, message.body.isStarted);
    }
    if (message.headers?.type === 'language') {
        console.log('language');
        if (message.body?.language) {
            toolbarMenu.setLanguage(message.body.language);
        }
        return;
    }
    //document.getElementById("storage").innerHTML = data
    //document.getElementById("storage").innerHTML = data
};
socket.onopen = function () {
    // socket.send('Hello server!')
};
