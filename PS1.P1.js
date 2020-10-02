const revalphaborder = string => string.split('').sort().reverse().join('')

const {describe, it} = require('mocha');
const {expect} = require('chai')

describe('TestforP1',() =>{
    it('Should return xuutsssrrppoollliiiiiiigfeedcccaaa when passed supercalifragilisticexpialidocious'
        , () =>{
        let output = revalphaborder('supercalifragilisticexpialidocious');
        expect(output).to.be.eq('xuutsssrrppoollliiiiiiigfeedcccaaa');
        })
    it('Should return zzzyyyxxxwwwvvvuuutttsssrrrqqaa when passed aqaqzyxyzzywwxvxwvvutututsrrssr'
        ,() =>{
        let output = revalphaborder('aqaqzyxyzzywwxvxwvvutututsrrssr')
        expect(output).to.be.eq('zzzyyyxxxwwwvvvuuutttsssrrrqqaa')
        })

})
