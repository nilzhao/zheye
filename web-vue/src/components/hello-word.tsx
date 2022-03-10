import { defineComponent, reactive, ref } from 'vue';
import styles from './hello-word.module.scss';

const HelloWorld = defineComponent<{ msg: string }>({
  setup(props) {
    const count = ref(0);
    const state = reactive({
      c: 0
    });

    const inc = () => {
      count.value++;
      state.c++;
    };

    return () => (
      <div onClick={inc} class={styles.a}>
        <div>{count.value}</div>
        <div>{state.c}</div>
        <div>{props.msg}</div>
        <div>{props.msg}</div>
        <div>{props.msg}</div>
      </div>
    );
  }
});

export default HelloWorld;
