import { connectToMongoDB } from "@/db/connection"
import Users from "@/db/schema"

export async function POST(request: Request) {
    await connectToMongoDB()
    const { playerName, point } = await request.json()
    try {
        await Users.findOneAndUpdate(
            {playerName},
            {$set : {playerName, point}},
            {upsert : true}
        
        )
    console.log("Succes insert data")
    return Response.json({success : "Success"})
    } catch (error) {
        console.log(error);
        return Response.json({message: 'error creating todo'});
    }
}

export async function GET() {
    await connectToMongoDB()
    try {
        const users = await Users.find().sort({point : -1}).limit(5);
        return Response.json(users)
    } catch (error) {
        console.log(error);
        return Response.json({message: 'error creating todo'});
    }
}