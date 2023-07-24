import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
            Movie Finder
            </Link>
        </nav>
    )
}
