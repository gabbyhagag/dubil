import React from 'react'
import { addDecorator } from '@storybook/react';
import theme from '../src/theme'
import { ThemeProvider } from 'theme-ui'
import '@storybook/addon-console';
import StoryRouter from 'storybook-react-router';

addDecorator(StoryRouter());
addDecorator(storyFn => <ThemeProvider theme={theme as any}>{storyFn()}</ThemeProvider>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}