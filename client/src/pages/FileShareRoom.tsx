import React, { useState } from 'react'
import RouteError from './RouteError'

interface Props {
    roomId: number
    socket: Socket
    username: string
    setRoomId: any
    setUsername: any
}

const FileShareRoom: React.FC<Props> = ({ roomId, socket, username, setRoomId, setUsername }) => {

    if (username === "") return <RouteError />

    const [file, setFile] = useState<any>(null)

    const handleFileUpload = (): Promise<void> => {
        socket.emit("get_file", {
            file: file,
            ext: file.type.split('/')[1]
        })
    }

    console.log(file, file.type, file.type.split('/')[1])

    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleFileUpload}>Upload</button>
        </div>
    )
}

export default FileShareRoom