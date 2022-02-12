const frisby = require('frisby')
const server = require('../app')


describe('GET /', () => {
    it("should be up and running", function () {
        return frisby.get(`http://localhost:5000/`).expect(`status`, 200)
    })
})

afterAll(async () => {
    await server.run.close()
})