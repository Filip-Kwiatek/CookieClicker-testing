import "cypress-real-events";
import Cookie from "../components/Cookie/Cookie";

describe("Testing Cookie component", () => {
  it("correctly renders cookie image and css of the selectors", () => {
    cy.mount(<Cookie onClick={cy.stub().as("onClick")} />);
    cy.get("img").should("be.visible").and("not.be.disabled").click();
    cy.get("img").should("have.attr", "alt", "cookie");
    cy.get("img").should("have.class", "_cookie_4edi1_105");
    cy.get("img").click({ force: true }).trigger("mouseover").click();
    cy.get("#plus").should("have.css", "visibility", "visible");
    cy.get("#plus").should(
      "have.css",
      "color",
      "rgb(255, 255, 255)"
    );
    cy.get("img").realClick();
    cy.get("img").should("have.css", "filter", "brightness(0.9)");
    cy.get("#plus").should("be.hidden");
    cy.get("#plus").should("have.text", "+1");
  });
});
