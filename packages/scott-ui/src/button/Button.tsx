import { defineComponent, PropType } from 'vue';
import 'uno.css';

export type IType = 'primary' | 'warning' | 'danger' | 'success' | 'default';
export type ISize = 'large' | 'medium' | 'small';
export const props = {
  type: {
    type: String as PropType<IType>,
    default: 'default',
  },
  size: {
    type: String as PropType<ISize>,
    default: 'medium',
  },
  ghost: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  icon: {
    type: String as PropType<string>,
    default: '',
  },
  round: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
};
export default defineComponent({
  name: 'SButton',
  props,
  setup(props, { slots }) {
    const size = props.size === 'large' ? 'leading-40px text-16px' : props.size === 'medium' ? 'text-12px leading-32px' : 'text-12px leading-24px';
    return () => (
      <button
        style="box-shadow: 0 2px #00000004;"
        class={
          props.ghost
            ? `
              px-16px
              m-1
              ${size}
              whitespace-nowrap
              ${props.round ? 'rounded-10' : 'rounded-1'}
              bg-white
              border
              border-${props.type}
              text-${props.type}
              transition-all
              cursor-pointer 
              hover:border-hover-${props.type}
              hover:text-hover-${props.type}
            `
            : `px-16px m-1 ${size} ${props.round ? 'rounded-10' : 'rounded-1'} whitespace-nowrap ${
                props.type === 'default' ? 'text-[#000000d9] border border-[#d9d9d9]' : 'text-white border-none'
              } transition-all bg-${props.type} hover:bg-hover-${props.type} ${props.type === 'default' ? 'hover:border-[#40a9ff] hover:color-[#40a9ff]' : ''} cursor-pointer`
        }
      >
        {props.icon !== '' ? <i class={`i-ic-baseline-${props.icon}  p-2`}></i> : ''}

        {slots.default ? <span class="ml-1">{slots.default()}</span> : ''}
      </button>
    );
  },
});
