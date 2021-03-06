const request = require('request-promise')

const RELYING_PARTY_ID = '0f0348f0-46d6-47c9-ba4d-2e7cd7f82e3e'
const TRUCODE_DEFAULTS = {
  baseUrl: 'https://api.staging.trusona.net/api/v2/trucodes',
  json: true,
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json'
  }
}

class FauxWebClient {

  static async createTruCode() {
    return request(Object.assign(TRUCODE_DEFAULTS, {
      url: '/',
      body: { relying_party_id: RELYING_PARTY_ID },
      method: 'POST'}))
  }
}

module.exports = FauxWebClient