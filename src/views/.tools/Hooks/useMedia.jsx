import { useCallback, useEffect, useState } from 'react';

export const useMedia = (queries, values, defaultValue) => {
  const mediaQueryLists = queries.map(query => window.matchMedia(query));

  const getValue = useCallback(() => {
    const index = mediaQueryLists.findIndex(mql => mql.matches);
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  }, [defaultValue, mediaQueryLists, values]);

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach(mql => mql.addListener(handler));
    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
  }, [getValue, mediaQueryLists]);

  return value;
};
