import React, { useState } from 'react'
import RouteError from './RouteError'
import { Socket } from 'socket.io-client'

interface Props {
    roomId: number
    socket: Socket
    username: string
    setRoomId: any
    setUsername: any
}

const FileShareRoom: React.FC<Props> = ({ roomId, socket, username, setRoomId, setUsername }) => {

    const [file, setFile] = useState<any>(null)

    const handleFileUpload = (): void => {
        const data = {
            file: file,
            ext: file.type.split('/')[1],
            roomId: roomId,
            type: file.type
        }

        socket.emit("get_file", data)
        console.log(data)
    }

    return (
        <div>
            <input type="file" onChange={(e) => setFile(e?.target?.files[0])} />
            <button onClick={handleFileUpload}>Upload</button>
        </div>
    )
}

export default FileShareRoom