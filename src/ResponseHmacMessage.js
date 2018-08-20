const crypto = require('crypto')
const qs = require('qs')

class ResponseHmacMessage {
    constructor(response) {
      this.response = response
    }

    getHmacMessage() {
      return {
        bodyDigest: crypto.createHash('md5').update(this.response.body).digest('hex'),
        requestUri: this.response.request.uri.pathname,
        contentType: this.response.headers['content-type'],
        date: this.response.headers['x-date'],
        method: this.response.request.method
      };
    }

    getRequestUri(){
      if (this.response.qs) {
        return `${this.response.request.uri.pathname}?${qs.parse(this.response.qs)}`
      }else{
        return this.response.request.uri.pathname
      }
    }

    getContentType(){
      return this.response.headers['content-type'] || ''
    }
  }
  module.exports = ResponseHmacMessage