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

    const dowloadFile = (data: any): void => {
        const element = document.createElement("a");
        let file = new Blob([data.file], { type: data.type });
        element.href = URL.createObjectURL(file);
        element.download = `${new Date().getMilliseconds()}.${data.ext}`;
        document.body.appendChild(element);
        element.click();
    }

    useEffect(() => {
        socket.on("get_files", (data: any): void => {
            console.log(data)
            dowloadFile(data)
        })
    }, [socket])

    return (
        <div>
            waiting for files
        </div>
    )
}

export default JoinRoom