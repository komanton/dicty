import { app, BrowserWindow, globalShortcut } from 'electron';
import { CommunicationEvent, StartStopEvent } from "./models/events";
import WebSocket from 'ws';
import { fork } from 'child_process'

const ps = fork(`${__dirname}/server.js`)

const wss = new WebSocket.Server({ port: 5857 })
// Type "Hello World" then press enter.
var robot = require("robotjs");
robot.setKeyboardDelay(1);

const state = { isStarted: false }

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    }
  })

  win.loadFile('src/settings/settings.html')
  // setInterval(function(){
  //   // Type "Hello World".
  //   robot.typeString("Hello world!");
  // }, 3000);

  wss.on('connection', function (w: any) {
    w.on('message', function (message: string) {
      const event = JSON.parse(message)
      console.log(event.headers?.type)
      // console.log(wss.clients)
      if (event.headers?.type === 'start-stop') {
        console.log('start-stop')
        state.isStarted = event.body.isStarted
        wss.clients.forEach(client => client.send(JSON.stringify(event)));
        return
      }

      if (event.headers?.type !== 'transcription') {
        return
      }
      
      // robot.typeStringDelayed(data,0);
      for (const s of event.body) {
        robot.unicodeTap(s.charCodeAt(0))
      }
    })
    w.on('close', function () {
      console.log("Speech.html is closed. Please, open it to continue dictation!")
    })
    w.send(JSON.stringify({ 
      headers: { type: 'init' },
      body: "Dictation is initialized!"
    } as CommunicationEvent<string>))
  })
}

const createToolbar = () => {
  const win = new BrowserWindow({
    show: false,
    transparent: true,
    frame: false,

    // An electron bug makes the bgcolor white on navigation/reload for #000000 and #00000000
    backgroundColor: '#00ffffff',
    // skipTaskbar: true,
    hasShadow: false,
    width: 85,
    height: 85,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    }
  })

  win.loadFile('src/toolbar/toolbar.html')
  console.log('initialized')

  win.on('ready-to-show', () => {
    win.show()
    console.log('showing')
  })
}
// See https://stackoverflow.com/a/66068492
//electron can't be transparent on linux
//see issue on github: https://github.com/electron/electron/issues/2170

// app.disableHardwareAcceleration(); //use this
//or use these two lines code
app.commandLine.appendSwitch('enable-transparent-visuals');
app.commandLine.appendSwitch('disable-gpu');

//createWindow need to wait(more than about 100ms) if you want the window to be transparent
// app.whenReady().then(createWindow); //this won't work
//app.commandLine.appendSwitch('enable-transparent-visuals');
//app.commandLine.appendSwitch('disable-gpu');
app.on('ready', () => {
  createWindow();
  setTimeout(() => {
    createToolbar();
  }, 200);

  globalShortcut.register('CommandOrControl+Space', () => {
    console.log('CommandOrControl+Space is pressed')
    wss.clients.forEach(client => client.send(JSON.stringify({ 
      headers: { type: 'start-stop' },
      body: { isStarted: !state.isStarted }
    } as StartStopEvent)));
  })

});

// app.whenReady().then(createWindow).then(createToolbar);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
