const { Readable } = require('stream')
const { uploadInboundFile } = require('../../storage')

module.exports = [{
  method: 'GET',
  path: '/upload/receipt',
  options: {
    plugins: {
      crumb: false
    },
    handler: async (request, h) => {
      return h.view('upload/upload-receipt')
    }
  }
},
{
  method: 'POST',
  path: '/upload/receipt',
  options: {
    plugins: {
      crumb: false
    },
    payload: {
      maxBytes: (50 * 1024 * 1024) + 250,
      multipart: true,
      timeout: false,
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data',
      failAction: (request, h, err) => {
        console.log(err)
        return h.view('upload/upload-receipt').takeover(400)
      }
    },
    handler: async (request, h) => {
      const filename = request.payload.landBoundary.hapi.filename
      const fileBuffer = request.payload.landBoundary._data
      const stream = new Readable()
      stream.push(fileBuffer)
      stream.push(null)
      await uploadInboundFile(stream, filename)

      return h.view('upload/upload-receipt')
    }
  }
}]
