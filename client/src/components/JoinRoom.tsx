import React from 'react'
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

  const navigate = useNavigate();

  const handleJoinRoom = async (): Promise<void> => {
    await socket.emit("join_room", roomId);
    navigate(`/home/share-file/${roomId}`)
  }

  return (
    <div>
      <input type="number" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleJoinRoom}>Join Room</button>
    </div>
  )
}

export default JoinRoom