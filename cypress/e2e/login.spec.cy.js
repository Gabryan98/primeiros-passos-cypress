describe('Orange HRM Tests', () => {
  
  const selectorList = {
    urlField: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    wrongCredentialAlert: "[role='alert']"
  }
  
  it('Login - Succsess', () => {
    cy.visit(selectorList.urlField)
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.selectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit(selectorList.urlField)
    cy.get(selectorList.usernameField).type('Test')
    cy.get(selectorList.passwordField).type('test123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/auth/login')
    cy.get(selectorList.wrongCredentialAlert)
  })
})
