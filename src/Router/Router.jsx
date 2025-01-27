import React from 'react'

// Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// components
import Header from "../components/Header"
import Footer from "../components/Footer"

// Pages
import Home from "../pages/Home"
import About from "../pages/About"
import Author from "../pages/Author"
import AuthorPost from "../pages/AuthorPost"
import Blog from "../pages/Blog"
import CategoryPost from "../pages/CategoryPost"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Register from "../pages/Register"
import ErrorPage from "../pages/ErrorPage";


export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/author" element={<Author />} />
                        <Route path="/author-post" element={<AuthorPost />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/category-post" element={<CategoryPost />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                        {/* Catch-all route for unmatched paths */}
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}