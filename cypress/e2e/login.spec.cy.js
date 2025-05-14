import userData from '../fixtures/user-data.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';

describe('Login Orange HRM Tests', () => {
  
  it('Login - Fail', () => {
    LoginPage.accessLoginPage();
    LoginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    LoginPage.checkAccessInvalid()
  })

  it('Login - Success', () => {
    LoginPage.accessLoginPage();
    LoginPage.loginWithUser(userData.usernameSuccess.username,userData.usernameSuccess.password);
    DashboardPage.checkDashboardPage()
  })

})
