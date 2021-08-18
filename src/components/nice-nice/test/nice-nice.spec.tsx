import { newSpecPage } from '@stencil/core/testing';
import { NiceNice } from '../nice-nice';

describe('nice-nice', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NiceNice],
      html: `<nice-nice></nice-nice>`,
    });
    expect(page.root).toEqualHtml(`
      <nice-nice>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nice-nice>
    `);
  });
});
