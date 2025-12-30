import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/mongodb";
import Event from "@/database/event.model";

export async function GET() {
    try {
        await connectDB();
        
        const dbName = mongoose.connection.db?.databaseName;
        const host = mongoose.connection.host;
        const events = await Event.find({}).lean();
        
        return NextResponse.json({
            environment: process.env.NODE_ENV,
            database: {
                name: dbName,
                host: host,
                connectionState: mongoose.connection.readyState,
            },
            eventsCount: events.length,
            eventsList: events.map(e => ({
                id: e._id,
                title: e.title,
                slug: e.slug,
                tags: e.tags,
                createdAt: e.createdAt
            })),
            mongoUri: process.env.MONGODB_URI?.substring(0, 50) + '...',
        });
    } catch (error) {
        return NextResponse.json({ 
            error: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined,
        }, { status: 500 });
    }
}
