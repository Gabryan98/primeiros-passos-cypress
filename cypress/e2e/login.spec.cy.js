import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {
  
  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }
  
  it('Login - Succsess', () => {
    cy.visit("/auth/login")
    cy.get(selectorList.usernameField).type(userData.usernameSuccess.username)
    cy.get(selectorList.passwordField).type(userData.usernameSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
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
