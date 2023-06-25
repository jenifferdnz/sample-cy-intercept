/// <reference types="cypress" />
import { homePage, productSearchPage, addProduct} from '../support/pages'
import cartPage from '../support/pages/cart.page.js'
//const cart = require '../support/pages/cart.page.js'
const data = require('../fixtures/data.json')

describe('Product Search', () => {

  //before(()=>{
    //cy.intercept({
      //method: 'POST',
      //url: '/product/helena-hooded-fleece',
    //}, req => {
      //req.reply(
        //{
          //statusCode: 200,
          //body: `${req.query.callback}(
            //${JSON.stringify(
              //data.autocompleteSearchData
            //)} 
          //)`
        //}
      //)
    //})    
  //})

  beforeEach(() => {
    cy.visit("/")
  })

  it('Add product to cart', () => {
    //addProduct.productadd()
    cartPage.productadd()
    //cy.contains("Helena Hooded Fleece” foi adicionado no seu carrinho.)
    //cy.get('.woocommerce-message').contains('"Helena Hooded Fleece” foi adicionado no seu carrinho.').wait(200)
    cy.get('.dropdown-toggle > .mini-cart-items').contains(1)
  })
})
