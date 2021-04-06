export const themeReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SWITCH_THEME':
      return (state = payload);

    default:
      return state;
  }
};
