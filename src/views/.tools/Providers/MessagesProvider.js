import React from 'react';

import { messages } from 'config/language';

import { MessagesContext } from 'views/.tools/Contexts/MessagesContext';

export const MessagesProvider = ({ children }) => <MessagesContext.Provider value={{ ...messages }}>{children}</MessagesContext.Provider>;
