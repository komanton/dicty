# Dicty
Cross-Platform Transcription tool

# Build Dependencies

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
https://www.electronjs.org/docs/tutorial/application-distribution#manual-distribution