describe("error page", () => {
  it("shows when the page doesn't exist", () => {
    cy.visit({ url: "/test", failOnStatusCode: false });
    cy.wait(1).get('[data-cy="notFound"]').should("have.text", "Not Found");
  });

  it("goes to home page when link is clicked", () => {
    cy.visit({ url: "/test", failOnStatusCode: false })
      .get('[data-cy="homeLink"]')
      .click();
    cy.get("h1").should("have.text", "Sabrina Samuel");
  });
});
