class Toolbar {

  private recognizing = false;

  constructor(private startImage: { src: string }) {

  }

  startButton(event: any) {
    if (!this.recognizing) {
    console.log('start', this.recognizing);

      this.startImage.src = '../../assets/mic/mic-animate.gif';
    } else {
      this.startImage.src = '../../assets/mic/mic.gif';
    }
    this.recognizing = !this.recognizing;
  }
}

const startImage = document.getElementById('start_img') as HTMLImageElement;

const toolbarMenu = new Toolbar(startImage);
