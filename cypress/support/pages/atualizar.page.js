/// <reference types="cypress" />
class atualizarProduct {
    get #maisum (){return cy.get('.plus')}
    
    productatual(){
        this.#maisum.click()
        

    }
}
module.exports = new atualizarProduct