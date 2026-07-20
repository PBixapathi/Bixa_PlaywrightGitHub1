//To provide all Re-Usable methods / functions related to entire application
import {global} from './Global';

export class general extends global {
//User defined functions
//Open Application
public async OpenApplication() {
    await this.page.goto(this.url);
    console.log("Application Opened");
}
//Login to Application
public async Login() {
    await this.page.locator(this.textbox_loginname).fill(this.username);
    await this.page.locator(this.textbox_password).fill(this.password);
    await this.page.locator(this.button_login).click();
    console.log("Login Completed");
}
//Logout from Application
public async Logout() {
    await this.page.locator(this.link_logout).click();
    console.log("Logout Completed");
}
//Add Employee
public async addNewEmployee() {
    const frame = this.page.frameLocator(this.frame_empinfo);
    await frame.locator(this.button_add).click();
    await frame.locator(this.textbox_empfirstname).fill(this.empfirstname);
    await frame.locator(this.textbox_emplastname).fill(this.emplastname);
    await frame.locator(this.button_save).click();
    console.log("New Employee Added");
}
public async waitTime() {
    await this.page.waitForTimeout(3000);
}
}