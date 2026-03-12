import { Page, type Locator } from 'playwright';
import {expect} from "@playwright/test";
import daysWorkedPerWeekPage_content from "../content/daysWorkedPerWeekPage_content";

export class DaysWorkedPerWeekPage {
    private readonly page: Page;
    private readonly title: string;
    private readonly heading: string;
    private readonly days_input: Locator;
    private readonly continue_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = daysWorkedPerWeekPage_content.pageTitle;
        this.heading = daysWorkedPerWeekPage_content.heading;
        this.days_input = page.locator('#response');
        this.continue_button = page.getByRole('button', { name: daysWorkedPerWeekPage_content.continue_button });
    }

    async checkPageLoads(): Promise<void> {
        await Promise.all([
            await expect(this.page).toHaveTitle(this.title),
            await expect(this.page.getByRole('heading', { name: this.heading })).toBeVisible(),
            await expect(this.page.getByText(daysWorkedPerWeekPage_content.hint_text)).toBeVisible(),
            await expect(this.days_input).toBeVisible(),
            await expect(this.continue_button).toBeVisible(),
        ]);
    }

    async enterDays(days: string): Promise<void> {
        await this.days_input.fill(days);
    }

    async continueOn(): Promise<void> {
        await this.continue_button.click();
    }
}

export default DaysWorkedPerWeekPage;
