const puppeteer = require('puppeteer');
const path = require('path');
const timeout = 30000;

function getBrowser() {
	return puppeteer.launch({
		headless: true 
	});
}

async function getPage(browser) {
	const page = await browser.newPage();

	page.emulate({
		viewport: {
			width: 500,
			height: 2400
		},
		userAgent: ''
	});

	await page.goto(`file:${path.join(__dirname, '../e2e/index.html')}`);

	page.on('console', msg => {
		for (let i = 0; i < msg.args.length; ++i)
			console.log(`${i}: ${msg.args[i]}`);
	});
	
	return page;
}

async function getCoordinates (id, page) {
	const ele = await page.$(id);
	return page.evaluate((ele) => {
		const {top, left, bottom, right} = ele.getBoundingClientRect();
		return {top, left, bottom, right};
	}, ele);
}

describe('Puppeteer', () => {
	test('can find main header', async () => {

		const browser = await getBrowser();
		const page = await getPage(browser);
		
		await page.waitForSelector('#main_header');

		const html = await page.$eval('#main_header', e => e.innerHTML);
		expect(html).toBe('E2E Tests');

		browser.close();

	}, timeout);
});

describe('When using bootstrap', () => {
	test('one card per row will not cause overlap', async () => {

		const browser = await getBrowser();
		const page = await getPage(browser);
		
		await page.waitForSelector('#one_card_per_row_row_one_card_one');
		await page.waitForSelector('#one_card_per_row_row_two_card_one');
		
		const rect_one = await getCoordinates('#one_card_per_row_row_one_card_one', page);
		const rect_two = await getCoordinates('#one_card_per_row_row_two_card_one', page);
		
		expect(rect_two.top).toBeGreaterThan(rect_one.top);

		browser.close();

	}, timeout);

	test('two cards per row will not cause overlap', async () => {

		const browser = await getBrowser();
		const page = await getPage(browser);

		await page.waitForSelector('#two_cards_per_row_row_one_card_one');
		await page.waitForSelector('#two_cards_per_row_row_one_card_two');
		await page.waitForSelector('#two_cards_per_row_row_two_card_one');

		const rect_one = await getCoordinates('#two_cards_per_row_row_one_card_one', page);
		const rect_two = await getCoordinates('#two_cards_per_row_row_one_card_two', page);
		const rect_three = await getCoordinates('#two_cards_per_row_row_two_card_one', page);

		expect(rect_two.top).toBe(rect_one.top);
		expect(rect_two.left).toBeGreaterThan(rect_one.left);

		expect(rect_three.top).toBeGreaterThan(rect_one.top);
		
		browser.close();

	}, timeout);

	test('three cards per row will not cause overlap', async () => {

		const browser = await getBrowser();
		const page = await getPage(browser);

		await page.waitForSelector('#three_cards_per_row_row_one_card_one');
		await page.waitForSelector('#three_cards_per_row_row_one_card_two');
		await page.waitForSelector('#three_cards_per_row_row_one_card_three');
		await page.waitForSelector('#three_cards_per_row_row_two_card_one');

		const rect_one = await getCoordinates('#three_cards_per_row_row_one_card_one', page);
		const rect_two = await getCoordinates('#three_cards_per_row_row_one_card_two', page);
		const rect_three = await getCoordinates('#three_cards_per_row_row_one_card_three', page);
		const rect_four = await getCoordinates('#three_cards_per_row_row_two_card_one', page);

		expect(rect_two.top).toBe(rect_one.top);
		expect(rect_two.left).toBeGreaterThan(rect_one.left);
		expect(rect_three.left).toBeGreaterThan(rect_two.left);

		expect(rect_four.top).toBeGreaterThan(rect_one.top);	

		browser.close();

	}, timeout);
});
