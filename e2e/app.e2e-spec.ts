import { FoodHubPage } from './app.po';

describe('food-hub App', () => {
  let page: FoodHubPage;

  beforeEach(() => {
    page = new FoodHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
