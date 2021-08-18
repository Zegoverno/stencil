export function sayHello() {
  return Math.random() < 0.5 ? 'Hello' : 'Hola';
}

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
