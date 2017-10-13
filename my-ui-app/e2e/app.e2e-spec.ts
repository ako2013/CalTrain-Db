import { MyUiAppPage } from './app.po';

describe('my-ui-app App', () => {
  let page: MyUiAppPage;

  beforeEach(() => {
    page = new MyUiAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
