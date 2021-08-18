import { Component, h } from '@stencil/core';

@Component({
  tag: 'second-component',
  styleUrl: 'second-component.css',
  shadow: true,
})
export class SecondComponent {

  render() {
    return (
      <h1>
        José Hi!
      </h1>
    );
  }

}
