describe("Visit Soundbreak", () => {
  beforeEach(() => {
    //Use if testing locally. Doing so will cause circleCI pipeline to fail
    cy.visit("http://localhost:3000/");

    //Use if you want to test a successfull circleCI pipeline
    //cy.visit("https://soundbreak-us.firebaseapp.com/");
  });

  it("user can see logo", () => {
    cy.get(".logo");
  });

  it("user can use stopwatch feature", () => {
    //Clicks Start button
    cy.get(":nth-child(2) > .btn");
    cy.contains("Start").click();
    //Clicks Stop button
    cy.get(":nth-child(2) > .btn");
    cy.contains("Stop").click();
    //Clicks Resume button
    cy.get(".Watch > :nth-child(2) > :nth-child(1)");
    cy.contains("Resume").click();
    //Clicks Stop button
    cy.get(":nth-child(2) > .btn");
    cy.contains("Stop").click();
    //Clicks Reset button
    cy.get(".Watch > :nth-child(2) > :nth-child(2)");
    cy.contains("Reset").click();
  });

  it("user can see Spotify playlist widget", () => {
    cy.get("iframe");
  });

  it("user can see Login to Soundbreak button", () => {
    cy.contains("Login to Soundbreak");
  });

  it("user can see footer", () => {
    cy.contains("Soundbreak | By Carlos Urquiza");
  });
});
