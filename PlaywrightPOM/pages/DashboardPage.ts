import {Page,Locator} from '@playwright/test'

export class DashboardPage{

    readonly page: Page;
    readonly timeAtWork: Locator;
    readonly quickLaunch: Locator;
    readonly dashboardTitle: Locator;
    readonly profileMenu: Locator;
    readonly logoutButton: Locator;

    constructor(page:Page){
        this.page=page;
        this.timeAtWork = page.locator('//p[normalize-space()="Time at Work"]');
        this.quickLaunch = page.locator('//p[normalize-space()="Quick Launch"]');
        this.dashboardTitle = page.locator('//h6[@class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]');
        this.profileMenu = page.locator('//p[@class="oxd-userdropdown-name"]');
        this.logoutButton = page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/ul/li[4]/a');
    }

    async logout(){
        await this.profileMenu.click();
        await this.logoutButton.click();
    }
    
}