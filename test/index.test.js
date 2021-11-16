const index=require("../index");
// const assert = require("assert");

var expect = require("chai").expect;
 var assert = require("chai").assert;
var should=require("chai").should();
//problem 1
input: "iti" ===> output: Iti. expect
input: 12 ===> output: "".   expect



  describe("tests on parameter should be string",function(){


    it("test string",function(){

        assert.equal(index.capitalizeText("iti"),"ITI")
    });

    it("test string ",function(){

        assert.notEqual(index.capitalizeText("iti"),"asmaa")
    });
    
    it("test string ",function(){

        expect("test string" ,index.capitalizeText("iti")).to.be.a("iti")
    });
    it("test string ",function(){

        expect(()=>
        {
            index.capitalizeText(1)
        }).to.throw(TypeError,"wrong ")
    });
    

})

//problem 2
let value=0;
describe("gggg",()=>{
   
    beforeEach(value=>setTimeout(value,500));

    it("check is array or not ",function(){

        assert.isArray(index.createArray(1));
    });
    it("return array",function(){

        assert.isArray(index.createArray(1));
    });
    it("test if we pass 3 it will return array of length 3 and test it's include 1",function(){

        expect(index.createArray(3)).have.lengthOf(3).that.includes(1);
    });
    it("test if we pass 3 it will return array of length 3 and test it's include 1",function(){
    index.createArray(3).should.have.lengthOf(3).that.includes(1);
    });

    
    it("test if we pass 3 it will return array of length 3 and test it's include 1",function(){
       
        });


    it("pending test")
     


})


