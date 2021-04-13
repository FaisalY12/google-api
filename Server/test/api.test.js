const request = require("supertest");
const server = require('../server');

describe('API server', () => {
    let api
    let testCat = {
        "name": "Bob",
        "age": 6
    }

    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(5000, () => console.log('Test server running on port 5000'))
    })

    afterAll(done => { // `done` always gets passed in but if we want to use it, we must name it!
        // close the server, then run done
        console.log('Stoping test server')
        api.close(done) // `done` will be invoked when the `api.close` function is complete
    })
})