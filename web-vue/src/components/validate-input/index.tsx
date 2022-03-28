/**
 *
 */

import type { Rule } from 'async-validator';
import Schema from 'async-validator';
import type { ExtractPropTypes, InputHTMLAttributes, PropType } from 'vue';
import { defineComponent, ref } from 'vue';
import { get } from 'lodash';
import { classNames } from '@/lib/utils';

type ValidateInputType = 'input' | 'password' | 'textarea';

const validateInputProps = {
  name: String,
  rules: [Object, Array] as PropType<Rule>,
  modelValue: String,
  type: {
    type: String as PropType<ValidateInputType>,
    default: 'input',
  },
};

export type ValidateInputProps = ExtractPropTypes<typeof validateInputProps> & InputHTMLAttributes;

const ValidateInput = defineComponent({
  inheritAttrs: false,
  props: validateInputProps,
  setup(props, { emit, attrs }) {
    const errMsg = ref('');

    const updateValue = (e: Event) => {
      const value = (e.target as HTMLInputElement).value;
      emit('update:modelValue', value);
    };

    const validate = (value: string) => {
      if (!props.name || !props.rules) return;
      const validator = new Schema({ [props.name]: props.rules });

      validator.validate({ [props.name]: value }, errors => {
        errMsg.value = get(errors, '[0].message', '');
      });
    };

    const handleBlur = (e: FocusEvent) => {
      const value = (e.target as HTMLInputElement).value;
      validate(value);
    };

    const inputProps = {
      ...attrs,
      class: classNames('form-control', { 'is-invalid': errMsg.value }),
      onBlur: handleBlur,
      value: props.modelValue,
      onInput: updateValue,
    };

    return () => (
      <div>
        {props.type === 'textarea' ? <textarea {...inputProps} /> : <input {...inputProps} />}
        {!!errMsg.value && <div class="invalid-feedback">{errMsg.value}</div>}
      </div>
    );
  },
});

export default ValidateInput;
