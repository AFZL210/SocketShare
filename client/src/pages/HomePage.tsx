import React from 'react'
import { useState } from 'react'
import Select from '../components/Select'
import JoinRoom from '../components/JoinRoom'
import { Routes, Route } from 'react-router-dom'
import CreateRoom from '../components/CreateRoom'
import RouteError from './RouteError'
import FileShareRoom from './FileShareRoom'
import { Socket } from 'socket.io-client'

interface Props {
    socket: Socket
}

const HomePage: React.FC<Props> = ({ socket }) => {
    const [roomId, setRoomId] = useState<number>(0);
    const [username, setUsername] = useState<string>("");

    return (
        <Routes>
            <Route path='/' element={<Select />} />
            <Route path='join-room' element={<JoinRoom socket={socket} roomId={roomId} username={username} setRoomId={setRoomId} setUsername={setUsername} />} />
            <Route path='create-room' element={<CreateRoom />} />
            <Route path="share-file/:roomId" element={<FileShareRoom socket={socket} roomId={roomId} username={username} setRoomId={setRoomId} setUsername={setUsername} />} />
            <Route path='/*' element={<RouteError />} />
        </Routes>
    )
}

export default HomePage