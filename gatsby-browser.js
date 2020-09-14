/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import * as React from "react";
// import * as ReactDOM from "react-dom"

import DarkModeProvider from "./src/components/DarkModeProvider/DarkModeProvider";

export const wrapRootElement = ({ element }) => (
  <DarkModeProvider>{element}</DarkModeProvider>
);

// export const replaceHydrateFunction = () => ReactDOM.render;