import React from 'react'
import Select from '../components/Select'
import JoinRoom from '../components/JoinRoom'
import { Routes, Route } from 'react-router-dom'
import CreateRoom from '../components/CreateRoom'
import RouteError from './RouteError'

const HomePage = () => {
    return (
        <Routes>
            <Route path='/' element={<Select />} />
            <Route path='join-room' element={<JoinRoom />} />
            <Route path='create-room' element={<CreateRoom />} />
            <Route path='/*' element={<RouteError />} />
        </Routes>
    )
}

export default HomePage