import { Page, type Locator } from 'playwright';
import {expect} from "@playwright/test";
import irregularHoursPage_content from "../content/irregularHoursPage_content";

export class IrregularHoursPage {
    private readonly page: Page;
    private readonly title: string;
    private readonly heading: string;
    private readonly text_line1: string;
    private readonly continue_button: Locator;
    private readonly yes_radio_button: Locator;
    private readonly no_radio_button: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.title = irregularHoursPage_content.pageTitle;
        this.heading = irregularHoursPage_content.heading;
        this.text_line1 = irregularHoursPage_content.text_line1;
        this.yes_radio_button = page.locator('#response-0');
        this.no_radio_button = page.locator('#response-1');
        this.continue_button = page.getByRole('button', { name: 'Continue' });
    }

    async checkPageLoads(): Promise<void> {
        await Promise.all([
            await expect(this.page).toHaveTitle(this.title),
            await expect(this.page.getByRole('heading', { name: this.heading })).toBeVisible(),
            await expect(this.page.getByText(this.text_line1)).toBeVisible(),
            await expect(this.page.getByText(irregularHoursPage_content.yes_label, { exact: true })).toBeVisible(),
            await expect(this.page.getByText(irregularHoursPage_content.no_label, { exact: true })).toBeVisible(),
            await expect(this.yes_radio_button).toBeVisible(),
            await expect(this.no_radio_button).toBeVisible(),
            await expect(this.continue_button).toBeVisible(),
        ]);
    }

    async clickYesButton(): Promise<void> {
        await this.yes_radio_button.click();
    }

    async clickNoButton(): Promise<void> {
        await this.no_radio_button.click();
    }

    async continueOn(): Promise<void> {
        await this.continue_button.click();
    }
}
    

export default IrregularHoursPage;