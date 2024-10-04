import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../Components/Main/Main.jsx'

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/*" element={<Main />} />
        </Routes>
    )
}

export default PublicRoutes