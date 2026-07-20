import {test} from '@playwright/test';
import {general} from '../lib/General';
test('TC001_Login_Logout', async({page})=> {
//Test Steps
const gen = new general(page);
await gen.OpenApplication();
await gen.Login();
await gen.Logout();
})