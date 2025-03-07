import SaveMenu from "../components/SaveMenu/SaveMenu";

describe("Testing SaveMenu component", () => {
  it("renders all the li from the component and initial value of cookies per second", () => {
    cy.mount(<SaveMenu cookiesps={0} />);
    cy.get("#cookie_per_sec").should("contain", "0");
    cy.get("#cookie_per_sec").invoke("text", "cookies/second : 1");
    cy.get("#cookie_per_sec").should("contain", "1");
    cy.get("#export_save").should("have.text", "Export Save");
    cy.get("#import_save").should("have.text", "Import Save");
    cy.get("#reset").should("have.text", "Reset");
    cy.get("#version").should("contain", "v.0.1251");
  });
});
