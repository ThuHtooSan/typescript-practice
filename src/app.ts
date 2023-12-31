import { Invoice, Payment, ListTemplate } from './classes/index.js';
import { HasFormatter } from './interfaces/index.js';

const docOne: HasFormatter = new Invoice('yoshi', 'web work', 2125);
const docTwo: HasFormatter = new Payment('mario', 'plumbing work', 235);

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const form = document.querySelector('.new-item-form') as HTMLFormElement;

const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  type contentType = [string, string, number];

  const content: contentType = [
    toFrom.value,
    details.value,
    amount.valueAsNumber,
  ];

  const doc: HasFormatter =
    type.value === 'invoice'
      ? new Invoice(...content)
      : new Payment(...content);

  list.render(doc, type.value, 'end');
});
