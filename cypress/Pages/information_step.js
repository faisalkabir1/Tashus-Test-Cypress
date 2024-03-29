import { faker } from '@faker-js/faker';

class Information {
    VehiclesDetails() {
        //cy.get('#\:r6\:').click();
        cy.get('input.MuiInputBase-input[name="licensePlate.number"]').type('YY819H');
    
        cy.get('input.MuiInputBase-input[aria-autocomplete="list"]').type('SA');
        // Wait for the dropdown to appear (you might need to adjust the waiting time)
        cy.get('.MuiAutocomplete-popper').should('be.visible');
        // Click on the dropdown option
        cy.contains('.MuiAutocomplete-option', 'South Australia').click();
        // Assuming you want to click the button regardless of its disabled state
        cy.get('button.MuiButton-containedSuccess').click();
        cy.wait(2000);
    }

    VehicleUniqueName() {
        const { faker } = require('@faker-js/faker');
        const randomName = faker.vehicle.manufacturer();
        cy.get('input.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.css-1o6z5ng[name="carNickName"]')
            .type(randomName); 
    }
    ExpiryDateMethod(){
        //cy.get('[data-testid="CalendarIcon"] > path')
        const targetDate = '05/09/2024';

cy.get('input.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.MuiInputBase-inputAdornedEnd.css-b52kj1[placeholder="MM/DD/YYYY"]')  
  .clear()
  .type(targetDate)
  .should('have.value', targetDate)
  .should('have.attr', 'aria-invalid', 'false');

        

    }
}

export default Information;
