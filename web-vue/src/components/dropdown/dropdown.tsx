import { defineComponent, ref, Transition, PropType } from 'vue';
import './index.scss';
import { DropdownProps } from './types';

const Dropdown = defineComponent({
  props: {
    trigger: {
      type: String as PropType<DropdownProps['trigger']>,
      default: 'hover',
    },
    title: {
      type: [String, Object] as PropType<DropdownProps['title']>,
      required: true,
    },
  },
  setup(props, { slots, attrs }) {
    const visible = ref(false);

    const handleMouse = (v: boolean) => {
      if (props.trigger !== 'hover') {
        return;
      }
      visible.value = v;
    };

    const handleClick = (e: MouseEvent) => {
      if (props.trigger === 'click') {
        visible.value = !visible.value;
      }
      props.onClick?.(e);
    };

    const events =
      props.trigger === 'hover'
        ? {
            onMouseenter: () => handleMouse(true),
            onMouseleave: () => handleMouse(false),
          }
        : {};

    return () => (
      <div class={['zy-dropdown', attrs.class]} {...events}>
        <span onClick={handleClick}>{props.title}</span>
        <Transition
          v-show={visible.value}
          name="down"
          enter-active-class="animate__animated animate__tada"
          leave-active-class="animate__animated animate__bounceOutRight"
        >
          <ul class="zy-dropdown-menu">{slots.default?.()}</ul>
        </Transition>
      </div>
    );
  },
});

export default Dropdown;
