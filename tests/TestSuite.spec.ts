import {test} from '@playwright/test';
import {general} from '../lib/general';

test.describe('Test Suite for Project2', ()=> {
    test('TC001_Login_Logout', async({page})=> {
//Test Steps
    const gen = new general(page);
    await gen.OpenApplication();
    await gen.Login();
    await gen.Logout();
    });
    test('TC002_AddEmployee', async({page})=>{
    const gen = new general(page);
    await gen.OpenApplication();
    await gen.Login();
    await gen.addNewEmployee();
    await gen.Logout();
    });
});
