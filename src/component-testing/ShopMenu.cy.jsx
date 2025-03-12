import ShopMenu from "../components/ShopMenu/ShopMenu";

describe("Testing ShopMenu component", () => {
  beforeEach(() => {
    cy.mount(<ShopMenu />);
  });
  it("checks that the selectors have basic css", () => {
    cy.get("#wrapper div")
      .should("have.css", "color", "rgb(255, 0, 0)")
      .and("have.css", "background-color", "rgba(0, 0, 0, 0)");
  });
  it("checks that the selectors have image", () => {
    cy.get("#wrapper li").each(($el) => {
      cy.wrap($el).find("img").should("have.length", "2");
    });
  });
  it("checks that the selectors have title", () => {
    cy.get("#wrapper li").each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          expect(text.trim().length).to.be.greaterThan(9);
        });
    });
  });
  it("checks that the selectors have description", () => {
    cy.get("#wrapper li").each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          expect(text.trim().length).to.be.greaterThan(20);
        });
    });
  });
});
