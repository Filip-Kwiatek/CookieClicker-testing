import MenuOption from "../components/MenuOption/MenuOption";

describe("Testing MenuOption component", () => {
  it("renders option for menu and css", () => {
    cy.mount(<MenuOption />);
    cy.get("#wrapper").should("have.css", "display", "flex");
    cy.get("#wrapper img")
      .should("have.attr", "alt", "small cookie")
      .and(
        "have.attr",
        "src",
        "https://orteil.dashnet.org/experiments/cookie/currencysmall.png"
      );
    cy.get("#quantity")
      .should("have.css", "visibility", "hidden")
      .and("have.value", "");
  });
});
