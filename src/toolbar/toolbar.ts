import { StartStopEvent } from '../models/events';

class Toolbar {

  private recognizing = false;

  constructor(
    private startImage: { src: string },
    private getSocket: () => WebSocket,
    private languageButton: HTMLButtonElement,
  ) {

  }

  startButton(event: any, isStarted: boolean) {
    if (this.recognizing === isStarted) {
      return
    }
    console.log(event)
    if (!this.recognizing) {
      console.log('start', this.recognizing);

      this.startImage.src = '../../assets/mic/mic-animate.gif';
      this.getSocket().send(JSON.stringify({
        headers: { type: 'start-stop' },
        body: { isStarted: true }
      } as StartStopEvent))
    } else {
      this.startImage.src = '../../assets/mic/mic.gif';
      this.getSocket().send(JSON.stringify({
        headers: { type: 'start-stop' },
        body: { isStarted: false }
      } as StartStopEvent))
    }
    this.recognizing = !this.recognizing;
  }

  switchLanguage(event: any) {
    console.log(event)
  }

  setLanguage(language: string) {
    console.log('set language', language)
    this.languageButton.innerHTML= language ? language : ''
  }
}

let socket: WebSocket = new WebSocket("ws://localhost:5857");;

const getSocket = () => {
  // if (!socket) {
  //   socket = new WebSocket("ws://localhost:5857");
  // }
  return socket
}



const startImage = document.getElementById('start_img') as HTMLImageElement;
const languageButton = document.getElementById('language_button') as HTMLButtonElement;

const toolbarMenu = new Toolbar(startImage, getSocket, languageButton);

socket.onmessage = function (event) {
  var message = JSON.parse(event.data)
  console.log(message)
  if (message.headers?.type === 'start-stop') {
    toolbarMenu.startButton(null, message.body.isStarted)
  }

  if (message.headers?.type === 'language') {
    console.log('language')
    if (message.body?.language) {
      toolbarMenu.setLanguage(message.body.language)
    }
    return
  }


  //document.getElementById("storage").innerHTML = data
  //document.getElementById("storage").innerHTML = data
}
socket.onopen = function () {
  // socket.send('Hello server!')
}