import * as statics from 'node-static'

var file = new statics.Server(`${__dirname}/../speech`)

require('http').createServer(function (request: any, response: any) {
    request.addListener('end', function () {
        file.serve(request, response)
    }).resume()
}).listen(9990)