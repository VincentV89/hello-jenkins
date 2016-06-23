var request = require('supertest');
var app = require('../app.js');

describe('GET /', function(){
    it('respond with hello world',function(done){
        console.log("Start Testing");
        request(app).get('/').expect('hello world',done);
    })
})