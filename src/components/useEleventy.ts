import React, { useContext } from 'react'

export type Eleventy = any
export const EleventyContext = React.createContext<Eleventy>(null as any)

// Wraps the standard stack navigator.
// eslint-disable-next-line react-hooks/rules-of-hooks
const useEleventy = () => useContext<Eleventy>(EleventyContext)

export default useEleventy