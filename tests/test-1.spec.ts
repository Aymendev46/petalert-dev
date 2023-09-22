import { test, expect } from '@playwright/test';
import moment from 'moment';
import path from 'path';

const sleep = async (time) => {
  return await new Promise(res => setTimeout(res, time * 1000))
}

test('petalertfrance alert creation with delay', async ({ page }) => {
  await page.goto('https://app.petalertfrance.com/version-61/alert/name?type=lost&offer=free&from=instapage');

  // Step 1: Input Pet name and click Next
  await page.locator('#mr-pet-name-input').click();
  await page.locator('#mr-pet-name-input').fill('Test Pet');
  await page.locator('#mr-step-1-submit').click();
  await sleep(10)

  // Step 2: Select Pet files and click Next
  await page.locator('#mr-image-input > input').setInputFiles(path.join(__dirname, '/images/images (2).jpeg'));
  await sleep(5)
  await page.locator('#mr-step-2-submit').click();
  await sleep(10)

  // Step 3: Select Pet type
  await page.locator('#mr-pet-race-dog').click();
  await page.locator('#mr-purebred-dropdown').selectOption('"no"');
  await page.locator('#mr-bred-dropdown').selectOption('{"_class":"StaticObject","data":{"_api_c2_id":92,"_api_c2_especeId":2,"_api_c2__id":"5ae198bd42e0fb002df9c83f","_api_c2_name":"Affenpinscher","_api_c2_Fr":"Affenpinscher","_api_c2_En":"Affenpinscher","_api_c2_Es":"Affenpinscher","_api_c2_De":"Affenpinscher","_api_c2_Fur":true,"_api_c2_Order":"","_api_c2_Specie":"Dog","_api_c2_Creation_date":1665421980000,"_api_c2_order_fr":"affenpinscher","_api_c2_order_en":"affenpinscher","_api_c2_order_es":"affenpinscher","_api_c2_order_de":"affenpinscher","body_raw_text":"","_id":"d6d29b1986eb23ed535f7f88918403e7"},"value_id":"api.apiconnector2.bTNGE.bTNGI.results"}');
  await page.locator('#mr-step-3-submit').click();
  await sleep(10)

  // Step 4: Select Pet gender
  await page.locator('#mr-gender-male').click();
  await page.locator('#mr-spayed-dropdown').selectOption('"no"');
  await page.locator('#mr-color-dropdown').selectOption('"1348695171700984260__LOOKUP__1686685412126x356105220174648200"');
  await page.locator('#mr-step-4-submit').click();
  await sleep(10)

  // Step 5: Identify info
  await page.locator('#mr-microchip-dropdown').selectOption('"no"');
  await page.locator('#mr-tatoo-dropdown').selectOption('"no"');
  await page.locator('#mr-collar-dropdown').selectOption('"no"');
  await page.locator('#mr-step-5-submit').click();
  await sleep(10)

  // Step 5-5: Shilouette, size, fur type
  await page.locator('#mr-silhouette-dropdown').selectOption('{"_class":"StaticObject","data":{"_api_c2_name":"Normal","_api_c2_value":2,"_api_c2_En":"Normal","_api_c2_Fr":"Normale","_api_c2_fr_feminine":"Normale","_api_c2_Es":"Normal","_api_c2_De":"Normaal","_api_c2_Order_value":1,"body_raw_text":"","_id":"54df9b1f5d0d69b97a672b49d08e67b0"},"value_id":"api.apiconnector2.bTNGE.bTNko.animal_silhouette"}');
  await page.locator('#mr-size-dropdown').selectOption('{"_class":"StaticObject","data":{"_api_c2_name":"Medium","_api_c2_value":2,"_api_c2_En":"Medium","_api_c2_Fr":"Moyen","_api_c2_Es":"Mediano","_api_c2_De":"Medium","body_raw_text":"","_id":"61a9d4b915c007ccfed07dc0c810a390"},"value_id":"api.apiconnector2.bTNGE.bTNko.animal_size"}');
  await page.locator('#mr-fur-dropdown').selectOption('{"_class":"StaticObject","data":{"_api_c2_name":"Mi Long","_api_c2_value":2,"_api_c2_En":"Medium","_api_c2_Fr":"Mi Long","_api_c2_Es":"Semilargo","_api_c2_De":"Halflang","body_raw_text":"","_id":"52f8ef6ea709b4bbaf832fce506b2663"},"value_id":"api.apiconnector2.bTNGE.bTNko.animal_hair"}');
  await page.locator('#mr-step-5-5-submit').click();
  await sleep(10)

  // Step 6: Date Input
  await page.locator('#mr-date-eu input').click(); // fill(moment().subtract(1, 'day').format('DD/MM/YYYY'), { force: true })
  await page.locator('//div[@class="air-datepicker-cell -day-"][last()-1]').click()
  await page.locator('#mr-step-6-submit').click();
  await sleep(10)

  // Step 7: Location
  await page.locator('#mr-country-dropdown').selectOption('"fr"');
  await page.locator('#mr-department-dropdown').selectOption('"Vlaams Gewest"');
  await page.locator('#mr-county-dropdown').selectOption('{"_class":"StaticObject","data":{"_api_c2_id":"378","_api_c2_county":"Brabant flamand","_api_c2_Xano_StateId":30,"body_raw_text":"","_id":"bf0a9a4ac25696bb4980f46714f8a2fe"},"value_id":"api.apiconnector2.bTPUA.bTPUI"}');
  await page.locator('#mr-city-dropdown').selectOption('" Alsemberg"');
  await page.locator('#mr-section').fill('Test Section');
  await page.locator('#mr-step-7-submit').click();
  await sleep(10)

  // Step 8: Contact Info
  await page.locator('#phone-number').fill('11122233');
  await page.locator('#email-input').fill('petalert@test.com');
  await page.locator('#mr-step-8-submit').click();
  await sleep(10)

  // Step 9: Additional Info
  await page.locator('#mr-other-info').fill('This is a test submit.');
  await page.locator('#mr-step-9-submit').click();
  await sleep(10)

  // Step 10: Choose delayed submit
  await page.locator('#mr-delayed-publish').click();
  await sleep(10)

  // Step 11: Confirm and choose Next
  await page.locator('#mr-step-11-submit').click();


  // New Alert should be on now.
  await sleep(10)
});
