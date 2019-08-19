/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import * as React from "react";

import BreakpointProvider from "./src/components/BreakpointProvider/BreakpointProvider";
import DarkModeProvider from "./src/components/DarkModeProvider/DarkModeProvider";

export const wrapRootElement = ({ element }) => (
  <DarkModeProvider>
    <BreakpointProvider>{element}</BreakpointProvider>
  </DarkModeProvider>
);
