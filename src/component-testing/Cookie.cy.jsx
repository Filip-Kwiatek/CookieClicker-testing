import "cypress-real-events";
import Cookie from "../components/Cookie/Cookie";

describe("Testing Cookie component", () => {
  it("correctly renders cookie image and css of the selectors", () => {
    cy.mount(<Cookie onClick={cy.stub().as("onClick")} />);
    cy.get("img").should("be.visible").and("not.be.disabled").click();
    cy.get("img").should("have.attr", "alt", "cookie");
    cy.get("img").should("have.class", "_cookie_4edi1_105");
    // cy.get("._plus_4edi1_135 p").invoke("css", "color", "black");
    cy.get("img").click({ force: true }).trigger("mouseover").click();
    cy.get("._plus_4edi1_135 p").should("have.css", "visibility", "visible");
    cy.get("._plus_4edi1_135 p").should(
      "have.css",
      "color",
      "rgb(255, 255, 255)"
    );
    cy.get("img").realClick();
    cy.get("img").should("have.css", "filter", "brightness(0.9)");
    cy.get("._plus_4edi1_135 p").should("be.hidden");
    cy.get("._plus_4edi1_135 p").should("have.text", "+1");
  });
});
