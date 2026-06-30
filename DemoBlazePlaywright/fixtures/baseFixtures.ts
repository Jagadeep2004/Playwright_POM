import { ProductPage } from './../pages/productPage';
import {test as base,expect} from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { LoginPage } from '../pages/loginPage';
import { ContactPage } from '../pages/contactPage';

type Fixtures = {
    homePage:HomePage;
    loginPage:LoginPage;
    contactPage:ContactPage;
    productPage:ProductPage;
};

export const test = base.extend<Fixtures>({
    homePage:async({page},use)=>{
        await use(new HomePage(page));        
    },
    loginPage: async({page},use)=>{
        await use(new LoginPage(page));
    },
    contactPage: async({page},use)=>{
        await use(new ContactPage(page));
    },
    productPage:async({page},use)=>{
        await use(new ProductPage(page));
    }
});

export{expect};
