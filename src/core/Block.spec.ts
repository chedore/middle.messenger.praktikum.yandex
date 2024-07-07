import { expect } from "chai";
import sinon from "sinon";
import Block from "./Block";

describe("Block", () => {
  let component: Block<any>;

  beforeEach(() => {
    component = new Block({});
  });

  it("тест, иницилизация с default props", () => {
    expect(component.props).to.deep.equal({});
  });

  it("тест, вызывов componentDidMount после инициализации", () => {
    const componentDidMountSpy = sinon.spy(component, "componentDidMount");
    component.dispatchComponentDidMount();
    expect(componentDidMountSpy.calledOnce).to.be.true;
  });

  it("тест, проверка изменений setProps", () => {
    const NEW_PROPS = { newProp: "newValue" };
    component.setProps(NEW_PROPS);
    expect(component.props).to.deep.equal(NEW_PROPS);
  });

  it("тест, вызывов componentDidUpdate, когда props изменен", () => {
    const componentDidUpdateSpy = sinon.spy(component, "componentDidUpdate");
    component.setProps({ newProp: "newValue" });

    expect(componentDidUpdateSpy.calledOnce).to.be.true;
  });
});
