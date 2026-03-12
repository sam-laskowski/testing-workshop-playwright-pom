import { Page, type Locator } from 'playwright';
import {expect} from "@playwright/test";
import workOutHolidayPage_content from "../content/workOutHolidayPage_content";

export class WorkOutHolidayPage {
    private readonly page: Page;
    private readonly title: string;
    private readonly heading: string;
    private readonly full_leave_year_radio: Locator;
    private readonly continue_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = workOutHolidayPage_content.pageTitle;
        this.heading = workOutHolidayPage_content.heading;
        this.full_leave_year_radio = page.locator('label', { hasText: workOutHolidayPage_content.full_leave_year });
        this.continue_button = page.getByRole('button', { name: workOutHolidayPage_content.continue_button || 'Continue' });
    }

    async checkPageLoads(): Promise<void> {
        await Promise.all([
            await expect(this.page).toHaveTitle(this.title),
            await expect(this.page.getByRole('heading', { name: this.heading })).toBeVisible(),
            await expect(this.page.getByText(workOutHolidayPage_content.full_leave_year, { exact: true })).toBeVisible(),
            await expect(this.page.getByText(workOutHolidayPage_content.starting_part_way, { exact: true })).toBeVisible(),
            await expect(this.page.getByText(workOutHolidayPage_content.leaving_part_way, { exact: true })).toBeVisible(),
            await expect(this.continue_button).toBeVisible(),
        ]);
    }

    async selectFullLeaveYear(): Promise<void> {
        await this.full_leave_year_radio.click();
    }

    async continueOn(): Promise<void> {
        await this.continue_button.click();
    }
}

export default WorkOutHolidayPage;
