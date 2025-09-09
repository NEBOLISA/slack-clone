import { StreamChat } from 'stream-chat'
import { ENV } from './env.js'



const streamClient = StreamChat.getInstance(ENV.STREAM_API_KEY, ENV.STREAM_API_SECRET)

const upsertStreamUser = async (userData) => { 
    try {
        await streamClient.upsertUsers(userData)
        console.log("User created/updated in Stream", userData.name)
        return userData
    } catch (error) {
        console.error("Error creating/updating user in Stream", error)
    }
}


const deleteStreamUser = async (userId) => {
    try {
        await streamClient.deleteUsers(userId)
        console.log("User deleted from Stream", userId)
    } catch (error) {
        console.error("Error deleting user from Stream", error)
    }
}

const generateStreamToken = (userId) => {
    try {
        const userIdString = userId.toString()
        return streamClient.createToken(userIdString)
    } catch (error) {
        console.log("Error generating Stream token", error)
        return null
    }
}
export { streamClient, upsertStreamUser, deleteStreamUser,generateStreamToken }