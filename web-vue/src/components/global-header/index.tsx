import type { CurrentUser } from '@/types/user';
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import Dropdown from '../dropdown/dropdown';
import DropdownItem from '../dropdown/dropdown-item';
import styles from './index.module.scss';

const user: CurrentUser = {
  id: 1,
  name: '奇',
  avatar: 'https://pic2.zhimg.com/v2-3c98b959c2582947850cd69f144d3f03_xs.jpg?source=d16d100b',
};

const UserInfo = defineComponent({
  name: 'GlobalHeaderUserInfo',
  props: {
    user: {
      type: Object as PropType<CurrentUser>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <>
        <Dropdown title={<>{props.user?.name}</>}>
          <DropdownItem class="text-body">我的专栏</DropdownItem>
          <DropdownItem class="text-body">我的专栏</DropdownItem>
        </Dropdown>
        <div class="rounded-circle h-100">
          <img class="rounded-circle h-100" src={user.avatar} alt="头像" />
        </div>
      </>
    );
  },
});

const LoginIn = defineComponent({
  setup() {
    return () => (
      <>
        <button type="button" class="btn btn-primary">
          登陆
        </button>
        <button type="button" class="btn btn-primary">
          注册
        </button>
      </>
    );
  },
});

const GlobalHeader = defineComponent({
  setup() {
    const isLogin = !!user.id;
    return () => (
      <div class={styles.header}>
        <div class="container d-flex justify-content-between align-items-center py-2 h-100">
          <h1 class="m-0 fs-5 text-white">者也专栏</h1>
          <div class="d-flex justify-content-between align-items-center h-100">
            {isLogin ? <UserInfo user={user} /> : <LoginIn />}
          </div>
        </div>
      </div>
    );
  },
});

export default GlobalHeader;
