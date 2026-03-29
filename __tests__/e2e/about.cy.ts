describe("about page", () => {
  it("goes to about page", () => {
    cy.visit("/");
    cy.get('[data-cy="nav-about-link"]').click();
    cy.url().should("include", "/about");
  });
});
