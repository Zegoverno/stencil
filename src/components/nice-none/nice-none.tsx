import { Component, h } from '@stencil/core';

@Component({
  tag: 'nice-none',
  styleUrl: 'nice-none.css',
  shadow: true,
})
export class NiceNone {

  render() {
    return (
      <div>
        <nice-nice></nice-nice>
        <my-component></my-component>
        <second-component></second-component>
      </div>
    );
  }

}
