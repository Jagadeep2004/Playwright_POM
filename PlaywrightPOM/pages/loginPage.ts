import{Page,Locator} from '@playwright/test'

export class LoginPage{

    readonly page:Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginButton:Locator;
    readonly loginTitle:Locator;
    readonly errorMessage:Locator;

    constructor(page:Page){
        this.page = page;
        this.username = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.loginButton = page.locator('//button[@type="submit"]');
        this.loginTitle = page.locator('h5');
        this.errorMessage = page.locator('//p[@class="oxd-text oxd-text--p oxd-alert-content-text"]');
    }

    async navigateToWebsite(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{
            waitUntil: 'networkidle'
        });
    }

    async login(username:string,password:string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async getLoginTitle(){
        return this.loginTitle;
    }

    async getErrorMessage(){
        return this.errorMessage;
    }
}