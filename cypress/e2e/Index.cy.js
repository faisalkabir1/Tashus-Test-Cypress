import Login from "../Pages/Login";
import Information from "../Pages/information_step";

describe('Visit site and login spec', () => {
  it('Login Test', () => {
    cy.visit('https://dev-testing.Tashus.com.au')
   const ln = new Login();
   
   ln.LoginMethod();
   
    //Info.Information();
  });
  it.only('Be a Partner', () => {
    cy.visit('dev-testing.Tashus.com.au');
   const ln = new Login();
   ln.LoginMethod();
   cy.wait(2000);
   cy.get('.MuiContainer-root > .MuiButton-contained').click();
    cy.wait(2000);
    const Info = new Information();
    Info.VehiclesDetails();
    Info.VehicleUniqueName();
    Info.ExpiryDateMethod();
  });
});