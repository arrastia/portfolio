import { CommonUtils } from './CommonUtils';

const classNames = classNames => {
  if (!classNames) return null;

  const classes = [];

  for (let index = 0; index < classNames.length; index++) {
    const className = classNames[index];
    const type = typeof className;

    if (type === 'string' || type === 'number') {
      classes.push(className);
    }

    if (type === 'object') {
      const clss = Array.isArray(className) ? className : Object.entries(className).map(([key, value]) => (!!value ? key : null));

      if (CommonUtils.isEmpty(clss)) classes.push(clss.filter(c => !!c));
    }
  }

  return classes.join(' ');
};

export const ClassNameUtils = { classNames };
