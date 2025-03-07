import MenuOption from "../components/MenuOption/MenuOption";

describe("Testing MenuOption component", () => {
  it("renders option for menu and css", () => {
    cy.mount(<MenuOption />);
    cy.get("._small_wrapper_djncw_29").should("have.css", "display", "flex");
    cy.get("._small_wrapper_djncw_29 img")
      .should("have.attr", "alt", "small cookie")
      .and(
        "have.attr",
        "src",
        "https://orteil.dashnet.org/experiments/cookie/currencysmall.png"
      );
    cy.get("._quantity_djncw_105")
      .should("have.css", "visibility", "hidden")
      .and("have.value", "");
  });
});
