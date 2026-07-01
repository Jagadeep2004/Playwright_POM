import {test as base,expect} from '@playwright/test'

import { HomePage } from '../pages/homePage'
import { SignupPage } from '../pages/signupPage';

type Fixtures = {
    homePage:HomePage;
    signupPage:SignupPage;
}

export const test = base.extend<Fixtures>({
    homePage:async({page},use)=>{
        await use(new HomePage(page));
    },
    signupPage:async({page},use)=>{
        await use(new SignupPage(page));
    }
})
export{expect};