import React from "react"

export default function Markup({ html, className }: { html: string, className?: string }) {
    return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
}