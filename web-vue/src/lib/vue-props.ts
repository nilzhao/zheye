import { PropType } from 'vue';

import type { VueTypeValidableDef, VueTypeDef } from 'vue-types';

const initDefaultProps = <T>(
  types: T,
  defaultProps: {
    [K in keyof T]?: T[K] extends VueTypeValidableDef<infer U>
      ? U
      : T[K] extends VueTypeDef<infer U>
      ? U
      : T[K] extends { type: PropType<infer U> }
      ? U
      : any;
  },
): T => {
  const propTypes: T = { ...types };
  Object.keys(defaultProps).forEach((key) => {
    const k = key as keyof T;
    const prop = propTypes[k] as unknown as VueTypeValidableDef;
    const defaultValue = defaultProps[k];
    if (prop) {
      if (prop.type || prop.default) {
        prop.default = defaultValue;
      } else if (prop.def) {
        prop.def(defaultValue);
      } else {
        propTypes[k] = { type: prop, default: defaultValue } as unknown as T[keyof T];
      }
    } else {
      throw new Error(`not have ${k} prop`);
    }
  });
  return propTypes;
};

export default initDefaultProps;
