/// <reference types="cypress" />

import cartPage from '../support/pages/cart.page.js'
import atualizarPage from '../support/pages/atualizar.page.js'
const data = require('../fixtures/data.json')


describe('Product atualizar', () => {

  before(()=>{
    cy.intercept({
      method: 'POST',
      url: '/?wc-ajax=get_refreshed_fragments',
    }, req => {
      req.reply(
        {
          statusCode: 200,
          body: {"fragments":{"div.widget_shopping_cart_content":"<div class=\"widget_shopping_cart_content\">\r\n<div class=\"mini_cart_content\">\r\n\t<div class=\"mini_cart_inner\">\r\n\t\t<div class=\"mcart-border\">\r\n\t\t\t\t\t\t\t<ul class=\"cart_list product_list_widget \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li id=\"mcitem-a9ead256e89faf733bdf6229d00ac5fb mini_cart_item\">\r\n\t\t\t\t\t\t\t\t<a class=\"product-image\" href=\"http:\/\/lojaebac.ebaconline.art.br\/product\/circe-hooded-ice-fleece\/?attribute_size=S&#038;attribute_color=Purple\">\r\n\t\t\t\t\t\t\t\t\t<img width=\"427\" height=\"546\" src=\"\/\/lojaebac.ebaconline.art.br\/wp-content\/uploads\/2021\/05\/wh12-purple_main-427x546.jpg\" class=\"attachment-woocommerce_thumbnail size-woocommerce_thumbnail\" alt=\"\" decoding=\"async\" loading=\"lazy\" \/>\t\t\t\t\t\t\t\t<\/a>\r\n\t\t\t\t\t\t\t\t<div class=\"product-details\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"http:\/\/lojaebac.ebaconline.art.br\/carrinho\/?remove_item=a9ead256e89faf733bdf6229d00ac5fb&#038;_wpnonce=3076232b31\" class=\"remove\" aria-label=\"Remove this item\" data-product_id=\"4028\" data-product_sku=\"WH12-S-Purple\" data-cart_item_key=\"a9ead256e89faf733bdf6229d00ac5fb\">&times;<\/a>\t\t\t\t\t\t\t\t\t<a class=\"product-name\" href=\"http:\/\/lojaebac.ebaconline.art.br\/product\/circe-hooded-ice-fleece\/?attribute_size=S&#038;attribute_color=Purple\">Circe Hooded Ice Fleece - S, Purple<\/a>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<span class=\"quantity\">\r\n\t\t\t\t\t\t\t\t\t\tQty: 2\t\t\t\t\t\t\t\t\t<\/span>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#82;&#36;<\/span>68,00<\/bdi><\/span>\t\t\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t\t\t\t\t\t<\/ul><!-- end product list -->\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t\t<p class=\"total\">\r\n\t\t\t\t\t<strong>Subtotal:<\/strong> <span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#82;&#36;<\/span>136,00<\/bdi><\/span>\t\t\t\t<\/p>\r\n\r\n\t\t\t\t\r\n\t\t\t\t<p class=\"buttons\">\r\n\t\t\t\t\t<a href=\"http:\/\/lojaebac.ebaconline.art.br\/carrinho\/\" class=\"button wc-forward view-cart\">View Cart<\/a>\r\n\t\t\t\t\t<a href=\"http:\/\/lojaebac.ebaconline.art.br\/checkout\/\" class=\"button checkout wc-forward\">Checkout<\/a>\t\r\n\t\t\t\t<\/p>\r\n\r\n\t\t\t\t\t\t<div class=\"clearfix\"><\/div>\r\n\t\t<\/div>\r\n\t<\/div>\r\n<\/div>\r\n<\/div>","#cart .mini-cart-items":" <span class=\"mini-cart-items\"> 2 <\/span> ","#cart .mini-cart-total":"<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#82;&#36;<\/span>136,00<\/bdi><\/span>","#cart span.sub-title":"\r\n     <span class=\"sub-title\">Cart : <span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#82;&#36;<\/span>136,00<\/bdi><\/span><\/span>\r\n     \r\n    ","span.cart-mobile":"\r\n    <span class=\"mini-cart-items cart-mobile\">\r\n        2    <\/span>\r\n\r\n    "},"cart_hash":"fe7c5f2d02300ee81f52fd24b4176f13"} 
        }
      )
    })    
  })

  beforeEach(() => {
    cy.visit("/")
  })

  it('atualizar carrinho', () => {
    cartPage.productadd()
    atualizarPage.productatual()
  })
})