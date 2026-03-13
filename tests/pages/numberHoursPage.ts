import { expect } from "@playwright/test";
import { type Locator, Page } from "playwright";
import landingPage_content from "../content/landingPage_content";
import numberHoursPage_content from "../content/numberHoursPage_content";

export class NumberHoursPage {
    private readonly page: Page;
    private readonly pageTitle: string;
    private readonly topHeading: string;
    private readonly heading: string;
    private readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = numberHoursPage_content.pageTitle;
        this.topHeading = numberHoursPage_content.topHeading;
        this.heading = numberHoursPage_content.heading;
        this.continueButton = page.getByRole('button', { name: numberHoursPage_content.continueButton });
    }

    async checkPageLoads(): Promise<void> {
        await Promise.all([
            await expect(this.page).toHaveTitle(this.pageTitle),
            await expect(this.page.getByRole('heading', { name: this.topHeading })).toBeVisible(),
            await expect(this.page.getByRole('heading', { name: this.heading })).toBeVisible(),
            await expect(this.continueButton).toBeVisible(),
        ]);
    }

    async enterHours(hours: string): Promise<void> {
        const hoursInput = this.page.locator('input[name="response"]');
        await hoursInput.fill(hours);
    }

    async continueOn(): Promise<void> {
        await this.continueButton.click();
    }


}

export default NumberHoursPage;