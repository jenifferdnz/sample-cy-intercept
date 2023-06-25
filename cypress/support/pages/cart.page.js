/// <reference types="cypress" />
class addProduct {
    get #product() {return cy.contains('Circe Hooded')}
    get #size (){return cy.get('.button-variable-item-S')}
    get #color () {return cy.get('.button-variable-item-Purple')}
    get #comprar (){return cy.get('.single_add_to_cart_button')}
    //get #validacao(){return cy.should('Helena Hooded Fleece” foi adicionado no seu carrinho.')}
    
    productadd(){
        this.#product.click()
        this.#size.click()
        this.#color.click()
        this.#comprar.click()
        //this.#validacao()

    }
}
module.exports = new addProduct

