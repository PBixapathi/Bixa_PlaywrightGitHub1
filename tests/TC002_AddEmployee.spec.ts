import {test} from '@playwright/test';
import {general} from '../lib/general';
test('TC002_AddEmployee', async({page})=> {
//Test Steps
const gen = new general(page);
await gen.OpenApplication();
await gen.Login();
await gen.addNewEmployee();
await gen.Logout();
})