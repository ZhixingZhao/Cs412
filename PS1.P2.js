const determoperation = string =>{
    let [left,op,right] = string;
    left = Number(left);
    right = Number(right);
    if(op == '+'){
        return (left,right) => left + right;
        //Why can't left and right take in the value I assigned before? I have already checked that they have
        //corrected values but I need to put the values agagin when I call the function.
    }
    else if(op == '-'){
        return (left,right) => left - right;
    }
    else if(op == '*'){
        return (left,right) => left * right;
    }
    else if(op == '/'){
        return (left,right) => left / right;
    }
    else if(op == '^'){
        return (left,right) => left ** right;
    }
}



const {describe, it} = require('mocha');
const {expect} = require('chai')

describe('Test for P2',()=>{
    it('Should return 6',()=>{
        let output = determoperation('4+2')(4,2);
        expect(output).to.be.eq(6)
    })
    it('Should return 35',()=>{
        let output = determoperation('5*7')(5,7);
        expect(output).to.be.eq(35)
    })
    it('Should return 5',()=>{
        let output = determoperation('6-1')(6,1);
        expect(output).to.be.eq(5)
    })
    it('Should return 4.5',()=>{
        let output = determoperation('9/2')(9,2);
        expect(output).to.be.eq(4.5)
    })
    it('Should return 256',()=>{
        let output = determoperation('2^8')(2,8);
        expect(output).to.be.eq(256)
    })
})