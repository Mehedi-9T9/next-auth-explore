import { NextRequest, NextResponse } from "next/server"
import { connectDB } from '@/lib/connectDB'
import authUser from '@/schemas/userSchema'

export const POST = async (request: NextRequest) => {
    try {
        await connectDB()
        const userInfo = await request.json()
        const newUser = await new authUser(userInfo)
        const postResult = await newUser.save()
        console.log("api routes :", userInfo);
        return NextResponse.json(postResult)

    } catch (error) {
        return NextResponse.json({ message: 'Post data fail', status: 500 })

    }


}