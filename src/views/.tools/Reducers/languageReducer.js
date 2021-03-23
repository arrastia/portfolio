export const languageReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SWITCH_LANGUAGE':
      return (state = payload);

    default:
      return state;
  }
};
