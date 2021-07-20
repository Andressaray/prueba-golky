import request from 'supertest'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import app from '../index'

describe('Response with a json with the world inverted', () => {
  it('Text inverted "Andres"', (done) => {
    request(app)
      .get('/text/Andres')
      .set('Accept', 'application/json')
      .end((_err, res) => {
        expect(res.body.data).to.equal('serdnA')
        console.table({ ...res.body })
        done()
      })
  })

  it('Bad text inverted ""', (done) => {
    request(app)
      .get('/text/')
      .set('Accept', 'application/json')
      .end((_err, res) => {
        expect(res.body.data).to.equal(undefined)
        done()
      })
  })
})
