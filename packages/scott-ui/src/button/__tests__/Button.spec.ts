import Button from "../Button";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
// 测试分组
describe("Button", () => {
  // mount
  test("mount  @vue/__tests__-utils", () => {
    // @vue/__tests__-utils
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });

    // 断言
    expect(wrapper.text()).toBe("Button");
  });

  test("primary", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        type: "primary",
      },
    });
    console.log(wrapper.classes());
    expect(wrapper.classes().includes("bg-primary")).toBe(true);
  });
});
