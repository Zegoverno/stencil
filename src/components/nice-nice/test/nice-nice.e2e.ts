import { newE2EPage } from '@stencil/core/testing';

describe('nice-nice', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nice-nice></nice-nice>');

    const element = await page.find('nice-nice');
    expect(element).toHaveClass('hydrated');
  });
});
