class MyInfoPage {
    
    selectorList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-mm-dd']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericSelect: ".oxd-select-text--arrow" 
            
        }

        return selectors;
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)

    }

    fillEmployDetails(employeeId, otherId, DriversLicenseNumber, expireDate) {
        cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(DriversLicenseNumber)
        cy.get(this.selectorList().genericField).eq(6).clear().type(expireDate)
        cy.get(this.selectorList().dateCloseButton).click()

    }

    saveForm() {
        cy.get(this.selectorList().submitButton).eq(0).click()
        cy.get('body').should('contain','Successfully Updated')

    }

    fillStatus() {
        cy.get(this.selectorList().genericSelect).eq(0).click()
    cy.get('[role="listbox"]').should('be.visible').within(() => {
      cy.contains('[role="option"]','Brazilian').click()
    }) 
    cy.get(this.selectorList().genericSelect).eq(1).click()
    cy.get('[role="listbox"]').should('be.visible').within(() => {
      cy.contains('[role="option"]','Married').click()
    })

    }

}

export default new MyInfoPage();