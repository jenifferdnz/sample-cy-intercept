/// <reference types="cypress" />
class removeProduct {
    get #view (){return cy.get('.woocommerce-message > .button')}
    get #remove() {return cy.get('.remove > .fa')}
    get #validacao(){return cy.contains('“Circe Hooded Ice Fleece” removido. Desfazer?')}
    
    productexcl(){
        this.#view.click()
        this.#remove.click()
        this.#validacao

    }
}
module.exports = new removeProduct