import Block from './Block';

function isEqual(lhs: string, rhs:string) {
  return lhs === rhs;
}

class Route {
  private _block: Block | null = null

  constructor(
    private _pathname: string,
    private _blockClass: any,
    private _props: string
  ) {}

  leave() {
    if (this._block) {
        this._block.hide();
    }
  }

  match(pathname:string) {
    return isEqual(pathname, this._pathname);
  }

  _renderDom(query: string, block: Block | null) {
      const root = document.querySelector(query);
      if (root === null) {
        throw new Error(`Root not found by selector "${query}"`);
      }
      root.append(block.getContent()!);
  }

  render() {
      if (!this._block) {
          this._block = new this._blockClass({});
          this._renderDom(this._props.rootQuery, this._block);
          return;
      }

      this._block.show();
  }
}
export default Route;
