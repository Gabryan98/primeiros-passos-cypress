import userData from '../fixtures/user-data.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';
import MenuPage from '../pages/menuPage';

describe('Orange HRM Tests', () => {
  
  const selectorList = {
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-mm-dd']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    genericSelect: ".oxd-select-text--arrow"
  }
  
  it.only('User Info Update - Success', () => {
    LoginPage.accessLoginPage();
    LoginPage.loginWithUser(userData.usernameSuccess.username,userData.usernameSuccess.password)
    DashboardPage.checkDashboardPage();
    MenuPage.accessMyInfo();
    cy.get(selectorList.firstNameField).clear().type("FirstNameTest")
    cy.get(selectorList.lastNameField).clear().type("LastNameTest")
    //cy.get(selectorList.genericField).eq().clear().type("NickNameTest")
    cy.get(selectorList.genericField).eq(3).clear().type("123456789")
    cy.get(selectorList.genericField).eq(4).clear().type("OtherIdTest")
    cy.get(selectorList.genericField).eq(5).clear().type("LicenseTest")
    cy.get(selectorList.genericField).eq(6).clear().type('2025-05-03')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain','Successfully Updated')
    cy.get(selectorList.genericSelect).eq(0).click()
    cy.get('[role="listbox"]').should('be.visible').within(() => {
      cy.contains('[role="option"]','Brazilian').click()
    }) 
    cy.get(selectorList.genericSelect).eq(1).click()
    cy.get('[role="listbox"]').should('be.visible').within(() => {
      cy.contains('[role="option"]','Married').click()
    })

    //cy.get(selectorList.genericField).eq(8).clear().type("sinNumberTest")

  })
  it('Login - Fail', () => {
    cy.visit("/auth/login")
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/auth/login')
    cy.get(selectorList.wrongCredentialAlert)
  })
})
