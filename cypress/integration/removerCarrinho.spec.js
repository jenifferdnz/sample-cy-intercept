/// <reference types="cypress" />
import cartremovepage from '../support/pages/cartremove.page'
import cartPage from '../support/pages/cart.page.js'
const data = require('../fixtures/data.json')


describe('Product Search', () => {

  before(()=>{
    cy.intercept({
      method: 'POST',
      url: '/?wc-ajax=get_refreshed_fragments',
    }, req => {
      req.reply(
        {
          statusCode: 200,
          body: {"fragments":{"div.widget_shopping_cart_content":"<div class=\"widget_shopping_cart_content\">\r\n<div class=\"mini_cart_content\">\r\n\t<div class=\"mini_cart_inner\">\r\n\t\t<div class=\"mcart-border\">\r\n\t\t\t\t\t\t\t<ul class=\"cart_empty \">\r\n\t\t\t\t\t<li>You have no items in your shopping cart<\/li>\r\n\t\t\t\t\t<li class=\"total\">Subtotal: <span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#82;&#36;<\/span>0,00<\/bdi><\/span><\/li>\r\n\t\t\t\t<\/ul>\r\n\t\t\t\r\n\t\t\t\t\t\t<div class=\"clearfix\"><\/div>\r\n\t\t<\/div>\r\n\t<\/div>\r\n<\/div>\r\n<\/div>","#cart .mini-cart-items":" <span class=\"mini-cart-items\"> 0 <\/span> ","#cart .mini-cart-total":"<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#82;&#36;<\/span>0,00<\/bdi><\/span>","#cart span.sub-title":"\r\n     <span class=\"sub-title\">Cart : <span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#82;&#36;<\/span>0,00<\/bdi><\/span><\/span>\r\n     \r\n    ","span.cart-mobile":"\r\n    <span class=\"mini-cart-items cart-mobile\">\r\n        0    <\/span>\r\n\r\n    "},"cart_hash":""} 
        }
      )
    })    
  })

  beforeEach(() => {
    cy.visit("/")
  })

  it('excluir produto do carrinho', () => {
    cartPage.productadd()
    //cy.get('.dropdown-toggle > .mini-cart-items').contains(1)
    cartremovepage.productexcl()

    
  })
})