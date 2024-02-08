class Information{

    VehiclesDetails(){
        //cy.get('#\:r6\:').click();
        cy.get('input.MuiInputBase-input[name="licensePlate.number"]').type('ZZA271');
    
cy.get('input.MuiInputBase-input[aria-autocomplete="list"]').type('VIC');
// Wait for the dropdown to appear (you might need to adjust the waiting time)
cy.get('.MuiAutocomplete-popper').should('be.visible');
// Click on the dropdown option
cy.contains('.MuiAutocomplete-option', 'Victoria').click();
// Assuming you want to click the button regardless of its disabled state
cy.get('button.MuiButton-containedSuccess').click();




};
};
export default Information;