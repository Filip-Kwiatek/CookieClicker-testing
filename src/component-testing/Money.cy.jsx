import Money from "../components/Money/Money";

describe("Testing Money component", () => {
  it("renders image of the cookie and initial value of cookies", () => {
    cy.mount(<Money />);
    cy.get("#cookie__image").should("be.visible");
    cy.get("#cookie__image img")
      .should(
        "have.attr",
        "src",
        "https://orteil.dashnet.org/experiments/cookie/currency.png"
      )
      .and("have.attr", "alt", "cookie");
    cy.get("#money_quantity").should("be.empty");
    cy.get("#money_quantity").invoke("text", "1");
    cy.get("#money_quantity").should("have.text", "1");
  });
});
