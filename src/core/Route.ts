import Block from './Block';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable arrow-body-style */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
/* eslint-disable new-cap */

interface ComponentConstructable<P extends Record<string, any> = any> {
  new (props: P): Block<P>;
}

const isEqual = (lhs: string, rhs: string): boolean => {
  return lhs === rhs;
};

const render = (query: string, block: Block) => {
  const root = document.querySelector(query);

  if (root === null) {
    throw new Error(`Root not found by selector '${query}'`);
  }

  root.innerHTML = '';

  root.append(block.getContent()!);

  return root;
};

class Route {
  private view: Block | null = null;

  constructor(
    private pathname: string,
    private readonly componentClass: ComponentConstructable,
    private readonly query: string,
  ) {}

  leave() {
    this.view = null;
  }

  match(pathname: string) {
    return isEqual(pathname, this.pathname);
  }

  render() {
    if (!this.view) {
      this.view = new this.componentClass({});

      render(this.query, this.view);
    }
  }
}

export default Route;
