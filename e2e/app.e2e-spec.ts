import { CrudConAngular4Page } from './app.po';

describe('crud-con-angular4 App', () => {
  let page: CrudConAngular4Page;

  beforeEach(() => {
    page = new CrudConAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
