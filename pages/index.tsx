// Render React to string.
import React from "react"
import Helmet from "react-helmet"
import Index from "../src/pages/index"

import { Eleventy, EleventyContext } from "../src/components/useEleventy"

export default function(props: Eleventy) {
    const value = {
        ...props,
        title: 'Michael Bullington',
    }

    return (
        <EleventyContext.Provider value={value}>
            <>
                <Helmet>
                    <link rel="stylesheet" href="static/fonts/Webfonts/fonts.css" />
                    <link rel="stylesheet" href="styles/global.css" />
                    <link rel="stylesheet" href="styles/home.css" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" />
                </Helmet>
                <Index />
                <script src="https://unpkg.com/medium-zoom@1.0.6/dist/medium-zoom.min.js" />
                <script src="https://unpkg.com/stimulus/dist/stimulus.umd.js" />
                <script src="static/js/main.js" />
            </>
        </EleventyContext.Provider>
    )
}