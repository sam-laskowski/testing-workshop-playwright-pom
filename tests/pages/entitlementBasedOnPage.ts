import { Page, type Locator } from 'playwright';
import {expect} from "@playwright/test";
import entitlementBasedOnPage_content from "../content/entitlementBasedOnPage_content";

export class EntitlementBasedOnPage {
    private readonly page: Page;
    private readonly title: string;
    private readonly heading: string;
    private readonly days_worked_per_week_radio: Locator;
    private readonly continue_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = entitlementBasedOnPage_content.pageTitle;
        this.heading = entitlementBasedOnPage_content.heading;
        this.days_worked_per_week_radio = page.locator('label', { hasText: entitlementBasedOnPage_content.days_worked_per_week });
        this.continue_button = page.getByRole('button', { name: entitlementBasedOnPage_content.continue_button });
    }

    async checkPageLoads(): Promise<void> {
        await Promise.all([
            await expect(this.page).toHaveTitle(this.title),
            await expect(this.page.getByRole('heading', { name: this.heading })).toBeVisible(),
            await expect(this.page.getByText(entitlementBasedOnPage_content.days_worked_per_week, { exact: true })).toBeVisible(),
            await expect(this.page.getByText(entitlementBasedOnPage_content.hours_worked_per_week, { exact: true })).toBeVisible(),
            await expect(this.page.getByText(entitlementBasedOnPage_content.annualised_hours, { exact: true })).toBeVisible(),
            await expect(this.continue_button).toBeVisible(),
        ]);
    }

    async selectDaysWorkedPerWeek(): Promise<void> {
        await this.days_worked_per_week_radio.click();
    }

    async continueOn(): Promise<void> {
        await this.continue_button.click();
    }
}

export default EntitlementBasedOnPage;
