/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import * as React from "react";

import BreakpointProvider from "./src/components/BreakpointProvider/BreakpointProvider";
import DarkModeProvider from "./src/components/DarkModeProvider/DarkModeProvider";

export const wrapRootElement = ({ element }) => (
  <DarkModeProvider>
    <BreakpointProvider>{element}</BreakpointProvider>
  </DarkModeProvider>
);
