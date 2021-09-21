describe("index page", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  it("should have a title", function () {
    cy.get("h1").should("have.text", "Welcome to Next.js!");
  });
});
