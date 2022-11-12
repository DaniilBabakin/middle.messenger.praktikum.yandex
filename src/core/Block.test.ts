import Block from "./Block"

type TestBlockProps = { text: string }

class TestBlock extends Block<TestBlockProps> {
  static componentName: "MyTestComponent"

  render() {
    //template=hbs
    return `
      <div class="test-block">
        <div class="test-block__inner">
          {{text}}
        </div>
      </div>
    `
  }
}

const getComponent = () => new TestBlock({ text: "Here is my test block" })

describe("core/Block", () => {
  test("should render element", () => {
    expect(getComponent().element).not.toBeNull()
  })

  test("should render inner element", () => {
    const componentInnerElement = getComponent().element?.querySelector(".test-block__inner")
    expect(componentInnerElement).not.toBeNull()
  })

  test("Renders correct text", () => {
    const componentInnerElement = getComponent().element?.querySelector(".test-block__inner")
    expect(componentInnerElement?.textContent).toContain("Here is my test block")
  })
})
