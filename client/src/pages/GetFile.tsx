import React, { useEffect } from 'react'
import { Socket } from 'socket.io-client'
import { useNavigate } from 'react-router-dom'

interface Props {
    roomId: number
    socket: Socket
    username: string
    setRoomId: any
    setUsername: any
}

const JoinRoom: React.FC<Props> = ({ roomId, socket, username, setRoomId, setUsername }) => {

    useEffect(() => {
        socket.on("get_files", (data: any): void => {
            console.log(data)
        })
    }, [socket])

    return (
        <div>
            waiting for files
        </div>
    )
}

export default JoinRoom