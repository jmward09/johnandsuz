import { JohnandsuzPage } from './app.po';

describe('johnandsuz App', function() {
  let page: JohnandsuzPage;

  beforeEach(() => {
    page = new JohnandsuzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
