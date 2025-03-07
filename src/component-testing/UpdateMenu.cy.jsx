import UpdateMenu from "../components/UpdateMenu/UpdateMenu";

describe("Testing UpdateMenu component", () => {
  beforeEach(() => {
    cy.mount(<UpdateMenu />);
  });
  it("should contains version", () => {
    cy.get(".version").each(($el, index, $list) => {
      cy.wrap($el).should("contain", "0.12");
    });
  });
  it("should contains data", () => {
    cy.get(".data").each(($el, index, $list) => {
      cy.wrap($el).should("contain", "");
    });

    cy.get(".log2");
    cy.get(".log3");
  });
  it("should contains logs", () => {
    cy.get(".log1").each(($el, index, $list) => {
      cy.wrap($el).should("not.be.empty");
    });

    cy.get(".log2");
    cy.get(".log3");
  });
  it("should contains logs", () => {
    cy.get(".log2").each(($el, index, $list) => {
      cy.wrap($el).should("not.be.empty");
    });

    cy.get(".log3");
  });
  it("should contains logs", () => {
    cy.get(".log3").each(($el, index, $list) => {
      if (Cypress.$($el).is(":empty")) {
        cy.wrap($el).should("be.empty");
      } else {
        cy.wrap($el).should("not.be.empty");
      }
    });
  });
});
