describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:8080/");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('adding', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:8080/');
    cy.get('#input').clear('b');
    cy.get('#input').type('bananer');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('add_delete', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:8080/');
    cy.get('#input').clear('bananer');
    cy.get('#input').type('bananer');
    cy.get('#butAdd').click();
    cy.get('.fa-trash').click();
    /* ==== End Cypress Studio ==== */
  });
});
