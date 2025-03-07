import Credits from "../components/Credits/Credits";

describe("Testing Credits component", () => {
  it("correctly renders component with the links", () => {
    cy.mount(<Credits />);
    cy.get("#credits").should("exist");
    cy.get("#brand").should("have.text", "Cookie Clicker");
    cy.get(".link").should("be.visible");
    cy.get("a").should("have.length", 6);
  });
});
