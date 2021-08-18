import { newSpecPage } from '@stencil/core/testing';
import { NiceNone } from '../nice-none';

describe('nice-none', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NiceNone],
      html: `<nice-none></nice-none>`,
    });
    expect(page.root).toEqualHtml(`
      <nice-none>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nice-none>
    `);
  });
});
