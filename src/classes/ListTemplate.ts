import { HasFormatter } from '../interfaces/index.js';

class ListTemplate {
  constructor(private ul: HTMLUListElement) {}

  render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
    const [li, h4, p] = ['li', 'h4', 'p'].map(element => {
      return document.createElement(element);
    });

    h4.innerText = heading;
    p.innerText = item.format();
    li.append(h4, p);

    pos === 'start' ? this.ul.prepend(li) : this.ul.append(li);
  }
}

export default ListTemplate;
