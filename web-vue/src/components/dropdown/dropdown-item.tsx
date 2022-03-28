import { classNames } from '@/lib/utils';
import { defineComponent } from 'vue';

const DropdownItem = defineComponent({
  setup(props, { slots, attrs }) {
    return () => (
      <li class={classNames('zy-dropdown-menu-item text-nowrap', attrs.class as string)}>
        {slots.default?.()}
      </li>
    );
  },
});

export default DropdownItem;
