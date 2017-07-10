import { CorrelatesWarPage } from './app.po';

describe('correlates-war App', () => {
  let page: CorrelatesWarPage;

  beforeEach(() => {
    page = new CorrelatesWarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
