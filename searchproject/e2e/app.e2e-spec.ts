import { SearchprojectPage } from './app.po';

describe('searchproject App', function() {
  let page: SearchprojectPage;

  beforeEach(() => {
    page = new SearchprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
