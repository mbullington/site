/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import * as React from "react";

import { BreakpointContext } from "./src/components/BreakpointProvider/BreakpointProvider";
import { DarkModeContext } from "./src/components/DarkModeProvider/DarkModeProvider";

export const wrapRootElement = ({ element }) => (
  <DarkModeContext.Provider value={[false, () => {}]}>
    <BreakpointContext.Provider value="desktop">
      {element}
    </BreakpointContext.Provider>
  </DarkModeContext.Provider>
);
