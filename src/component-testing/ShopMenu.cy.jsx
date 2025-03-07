import ShopMenu from "../components/ShopMenu/ShopMenu";

describe("Testing ShopMenu component", () => {
  beforeEach(() => {
    cy.mount(<ShopMenu />);
  });
  it("checks that the selectors have basic css", () => {
    cy.get("._small_wrapper_djncw_29")
      .should("have.css", "color", "rgb(255, 0, 0)")
      .and("have.css", "background-color", "rgba(0, 0, 0, 0)");
  });
  it("checks that the selectors have image", () => {
    cy.get("._wrapper_4iros_1 li").each(($el) => {
      cy.wrap($el).find("img").should("have.length", "2");
    });
  });
  it("checks that the selectors have title", () => {
    cy.get("._title_djncw_53").each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          expect(text.trim().length).to.be.greaterThan(9);
        });
    });
  });
  it("checks that the selectors have description", () => {
    cy.get("._description_djncw_91").each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          expect(text.trim().length).to.be.greaterThan(20);
        });
    });
  });
});
