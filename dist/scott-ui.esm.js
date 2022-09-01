import { defineComponent, createVNode, createTextVNode } from "vue";
const __uno = "";
const props = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "medium"
  },
  ghost: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ""
  },
  round: {
    type: Boolean,
    default: false
  }
};
const Button = defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    const size = props2.size === "large" ? "leading-40px text-16px" : props2.size === "medium" ? "text-12px leading-32px" : "text-12px leading-24px";
    return () => createVNode("button", {
      "style": "box-shadow: 0 2px #00000004;",
      "class": props2.ghost ? `
              px-16px
              m-1
              ${size}
              whitespace-nowrap
              ${props2.round ? "rounded-10" : "rounded-1"}
              bg-white
              border
              border-${props2.type}
              text-${props2.type}
              transition-all
              cursor-pointer 
              hover:border-hover-${props2.type}
              hover:text-hover-${props2.type}
            ` : `px-16px m-1 ${size} ${props2.round ? "rounded-10" : "rounded-1"} whitespace-nowrap ${props2.type === "default" ? "text-[#000000d9] border border-[#d9d9d9]" : "text-white border-none"} transition-all bg-${props2.type} hover:bg-hover-${props2.type} ${props2.type === "default" ? "hover:border-[#40a9ff] hover:color-[#40a9ff]" : ""} cursor-pointer`
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon}  p-2`
    }, null) : "", slots.default ? createVNode("span", {
      "class": "ml-1"
    }, [slots.default()]) : ""]);
  }
});
const _sfc_main = {};
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const entry = {
  install(app) {
    app.component(Button.name, Button);
    app.component(_sfc_main.name, _sfc_main);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  Button,
  JSXButton,
  _sfc_main as SFCButton,
  entry as default
};
//# sourceMappingURL=scott-ui.esm.js.map
