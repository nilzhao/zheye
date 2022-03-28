import { isArray, isObject, isString, trim } from 'lodash';

export const classNames = (
  ...args: (string | number | unknown | Record<string, any> | string[])[]
) => {
  const classes = new Set<string>();
  args.forEach(value => {
    if (!value) return;
    if (isString(value)) {
      classes.add(value);
      return;
    }
    if (isArray(value)) {
      value.forEach(arg => {
        const name = classNames(arg);
        if (name) {
          classes.add(name);
        }
      });
      return;
    }
    if (isObject(value)) {
      Object.entries(value).forEach(([name, validate]) => {
        if (validate) {
          classes.add(name);
        }
      });
    }
  });
  return [...classes].map(name => trim(name)).join(' ');
};
