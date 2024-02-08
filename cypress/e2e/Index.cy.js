import Login from "../Pages/Login";

describe('Visit site and login spec', () => {
  it('passes', () => {
    cy.visit('https://dev-testing.Tashus.com.au')
   const ln = new Login();
   ln.LoginMethod();

  });
});