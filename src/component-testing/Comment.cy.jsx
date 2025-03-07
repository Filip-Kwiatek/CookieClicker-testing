import Comment from "../components/Comment/Comment.jsx";

describe("Testing Comment component", () => {
  it("correctly renders comments with the given strings", () => {
    cy.mount(<Comment />);
    let comments = ["Your cookies are renowned!"];
    cy.get("#current__comment").should("be.visible");
    cy.get("#current__comment").contains("Start baking!").should("exist");

    cy.get("#current__comment", { timeout: 30000 }).should(($el) => {
      const text = $el.text();
      expect(comments).to.include(text);
      const commentToRemove1 = "Your cookies are renowned!";
      comments = comments.filter((comments) => comments !== commentToRemove1);
      comments.push("Your cookies are good!");
    });
    cy.get("#current__comment", { timeout: 30000 }).should(($el) => {
      const text = $el.text();
      expect(comments).to.include(text);
      const commentToRemove2 = "Your cookies are good!";
      comments = comments.filter((comments) => comments !== commentToRemove2);
      comments.push("Nice cookies <3");
    });
    cy.get("#current__comment", { timeout: 30000 }).should(($el) => {
      const text = $el.text();
      expect(comments).to.include(text);
    });
  });
});
