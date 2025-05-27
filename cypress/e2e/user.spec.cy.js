import userData from '../fixtures/user-data.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';
import MenuPage from '../pages/menuPage';
import MyInfoPage from '../pages/myInfoPages';

const Chance = require('chance')

const chance = new Chance()

describe('Orange HRM Tests', () => {
  
  it('User Info Update - Success', () => {
    LoginPage.accessLoginPage();
    LoginPage.loginWithUser(userData.usernameSuccess.username,userData.usernameSuccess.password)
    
    DashboardPage.checkDashboardPage();
    
    MenuPage.accessMyInfo();
    
    MyInfoPage.fillPersonalDetails(chance.first(),chance.last())
    MyInfoPage.fillEmployDetails('employeeId','otherId', '2025-07-29','2030-07-29')
    MyInfoPage.fillStatus()
    MyInfoPage.saveForm()

  })

})
