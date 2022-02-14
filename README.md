# Dicty
## Cross-Platform Multi-Language Dictation Tool (speech-to-text)
Official site: <a href="https://dicty.me">Dicty.me</a>
### Supports: Skype, Slack, Meeting notes, Outlook, Word, Console, Shell and other ...

Translates your voice into native keyboard symbols in any typing context.

Extremely useful for laptops with detachable keyboard in tablet mode.

Supports dictation with punctuation.

# Installation
1. Download a zip achive with latest release from https://github.com/komanton/dicty/releases.
2. Extract the zip into a folder on your desktop.
3. Execute dicty.exe from folder (you can create a shortcut)
4. When 'Windows protected your PC' alert apears, press 'More Info' and then press 'Run anyway' button.
6. Press 'Allow Access' when Windows Secutity Alert apears. (To allow connection to local host only).
7. When dicty is oppened press the link under the label "Open URL in Chrome:"
(IMPORTANT: the link should be oppened in Chrome browser only)
8. Press transparent michrophone button (you can move it in any place on desktop).
9. Chrome browser should ask you to allow michroprone permissions.
10. After that, place cursor in any place you want to type something and say some phrase.
11. Wait a second and magic will happen!

# Keyboard Shortcuts
1. Ctrl+Space - Star/Stop dictation
2. Ctrl+L - Switch languages(and during dictation too). Firstly, need to add other languages to Chrome->Settings->Languages->Add Languages. 

# Punctuation
You can use these phrases to add punctuation to your text by saying the name of the punctuation:
* Period
* Comma
* Exclamation point
* Question mark
* New line
* New paragraph

Notes:
- Punctuation works in German, English, Spanish, French, Italian, and Russian.
- In Spanish, punctuation at the beginning of the sentence, like ¡ or ¿, must be typed. 

# History
1. Autumn 2019: My favorite and the very expensive laptop was broken. As a temporary solution, I chose a cheap TABLET on Windows with a detachable keyboard (like an experiment). Worked like a thin client via RDP.
2. Spring 2019: Experiment with the tablet was successful! :partying_face: My previous laptop was not repaired and I bought a Microsoft Surface Pro 7 - the same form-factor: a tablet + a Detachable keyboard
3. Autumn 2019: I had a strong feeling that I want to drop away a detachable keyboard from a laptop in some cases. Don't worry, there ware no problem with a keyboard - it perfect and implemented with high quality. The only reason here is I decided that typing with voice is much more comfortable. I did a voice typing before in my Android smartphone but Windows had an absolutely poor dictation tool in Windows 10 (only with one language and built-in virtual keyboard).
4. The Game was started! :soccer: (Microsft 0 - 0 Dicty). There were several challenges:
   - Where to find Voice-to-Text transcription API ([Solution. Thanks Glen Shires](https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API))
   - How to type inside popular messengers and editors, like Word (Thanks [robotjs](https://github.com/octalmage/robotjs) and WebSocket
5. Spring 2020: It was not easy but after several months of research, the first MVP was released. :rocket: :partying_face: :soccer: (Microsft 0 - 1 Dicty)
6. Autumn 2020: Dicty become OpenSourced! :medal_sports:
7. Autumn 2021: Press release Windows 11 - A lot of improvments in Dictation Tool!!! (Try it: Windows + H) :astonished: :soccer: (Microsft 1 - 1 Dicty)
8. ... to be continued ...

# Linux
## Build Dependencies

`apt-get install libx11-dev libxtst-dev libpng++-dev`

# Known Issues
## Linux Build

### Error 'Permission for chrome-sandbox'
[10711:0314/101157.699500:FATAL:setuid_sandbox_host.cc(158)] The SUID sandbox helper binary was found, but is not configured correctly. Rather than run without sandboxing I'm aborting now. You need to make sure that /home/anton/Development/dicty/node_modules/electron/dist/chrome-sandbox is owned by root and has mode 4755.

Solution: https://authmane512.medium.com/solve-the-suid-sandbox-helper-binary-was-found-but-is-not-configured-correctly-3-solutions-4f1425a9a76c

1. Take path to chrome-sandbox from error message above
2. cd: /dicty/node_modules/electron/dist/
3. sudo chown root:root chrome-sandbox
4. sudo chmod 4755 chrome-sandbox

### Error 'Wrong NODE version for robotjs'
Error: The module '/home/anton/Development/dicty/node_modules/robotjs/build/Release/robotjs.node'
was compiled against a different Node.js version using
NODE_MODULE_VERSION 88. This version of Node.js requires
NODE_MODULE_VERSION 85. Please try re-compiling or re-installing

Solution: Run npm `run rebuild`

Sometimes it requires:
1. remove node_modules
2. yarn
3. yarn rebuild
4. yarn start


### Error 'Wrong characters for another locales'
Solution:
1. dpkg-reconfigure -plow locales
2. Choose ru_RU.UTF-8
3. Press space
4. Press Ok

# Distribution
1. Download Electron binaries (see exact version in package.jsnon)
2. Place the content of the current repository to the app folder. Follow the instruction for Windows https://www.electronjs.org/docs/tutorial/application-distribution#manual-distribution
4. Navigate to app folder and run yarn --prod
5. Rebuild robotjs with command `npm rebuild --runtime=electron --target=11.3.0 --disturl=https://atom.io/download/atom-shell --abi=85` (see https://github.com/octalmage/robotjs/wiki/Electron)
6. Zip all folder with electron.exe and new app folder in a single achive.
7. Fix link to download

# Languages
 Afrikaans
 Bahasa Indonesia
 Bahasa Melayu
 Català
 Čeština
 Deutsch
 English
 Español
 Euskara
 Français
 Galego
 Hrvatski
 IsiZulu
 Íslenska
 Italiano
 Magyar
 Nederlands
 Norsk bokmål
 Polski
 Português
 Română
 Slovenčina
 Suomi
 Svenska
 Türkçe
 български
 Pусский
 Српски
 한국어
 中文
 日本語
 Lingua latīna

<!--
# Backers and Sponsors

Thank you to all our backers and sponsors! 🙏 
[[Become a backer](https://opencollective.com/dicty-me#backer)]
[[Become a sponsor](https://opencollective.com/dicty-me#sponsor)]

<a href="https://opencollective.com/dicty-me#backers" target="_blank"><img src="https://opencollective.com/dicty-me/backers.svg?width=890"></a>


<a href="https://opencollective.com/dicty-me#sponsors" target="_blank"><img src="https://opencollective.com/dicty-me/sponsors.svg?width=890"></a>
-->
