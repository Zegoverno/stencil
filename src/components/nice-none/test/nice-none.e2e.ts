import { newE2EPage } from '@stencil/core/testing';

describe('nice-none', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nice-none></nice-none>');

    const element = await page.find('nice-none');
    expect(element).toHaveClass('hydrated');
  });
});
