import React, { useReducer } from 'react';

import { LanguageContext } from 'views/.tools/Contexts/LanguageContext';

import { languageReducer } from 'views/.tools/Reducers/languageReducer';

import { useLocalStorage } from 'views/.tools/Hooks/useLocalStorage';

export const LanguageProvider = ({ children }) => {
  const [translationState, setTranslationState] = useLocalStorage('language', 'en');
  const [languageState, languageDispatch] = useReducer(languageReducer, translationState);

  const onChangeLanguage = newLang => {
    languageDispatch({ type: 'SWITCH_LANGUAGE', payload: newLang });
    setTranslationState(newLang);
  };

  return <LanguageContext.Provider value={{ selected: languageState, onChangeLanguage }}>{children}</LanguageContext.Provider>;
};
