import { expect } from "chai";
import router from "./Router";
import Block from "./Block";
import sinon from "sinon";

describe("Router", () => {
  const getContentFake = sinon.fake.returns(document.createElement("div"));

  it("тест, handle route", () => {
    class MyBlock extends Block {}
    router.use("/test", MyBlock);
    expect(router.routes).to.have.lengthOf(1);
  });

  it("тест, change route", () => {
    class MyBlock extends Block {
      getContent = getContentFake;
    }
    class MyBlock2 extends Block {
      getContent = getContentFake;
    }

    router.use("/", MyBlock).use("/test", MyBlock2).start();
    router.go("/test");
    expect(window.location.pathname).to.equal("/test");
  });

  it("тест, change currentRoute", () => {
    class MyBlock extends Block {
      getContent = getContentFake;
    }
    class MyBlock2 extends Block {
      getContent = getContentFake;
    }

    router.use("/", MyBlock).use("/test", MyBlock2).start();
    router.go("/test");

    // @ts-expect-error тестируем приватное поле
    expect(router._currentRoute.pathname).to.equal("/test");
  });
});
