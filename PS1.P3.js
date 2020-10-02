const lambda1 = (string) =>{
    let ret = string;
    let accu = 0;
    for (index in string){
        if (string[index] == 'c'){
            ret = ret.slice(0,Number(index)+accu) + ';' + ret.slice(Number(index)+accu);
            accu = accu + 1;
        }
    }
    return ret.split(';');
}
const lambda2 = (string) =>{
    let ret = {
        originalString:string,
        modifiedString:string.replace(/a/g,'A'),
        numberReplaced:0,
        length:string.length
    }
    let count = 0;
    for (index in string){
        if (string[index] == 'a'){
            ret.numberReplaced = ret.numberReplaced + 1
        }
    }
    return ret;
}

let modfunc = (string,decfunc) => decfunc(string);

console.log(modfunc('supercalifragilisticexpialidocious',lambda1))
console.table(modfunc('supercalifragilisticexpialidocious',lambda2))


const {describe, it} = require('mocha');
const {expect} = require('chai')

describe('Test for P3',()=>{
    it('Should return [ \'super\', \'califragilisti\', \'cexpialido\', \'cious\' ]',()=>{
        let output = modfunc('supercalifragilisticexpialidocious',lambda1);
        expect(output).to.be.eql([ 'super', 'califragilisti', 'cexpialido', 'cious' ])
    })
    it('Should return correct object',()=>{
        let output = modfunc('supercalifragilisticexpialidocious',lambda2);
        expect(output).to.be.eql({
            originalString:'supercalifragilisticexpialidocious',
            modifiedString:'supercAlifrAgilisticexpiAlidocious',
            numberReplaced:3,
            length:34
        })
    })
})