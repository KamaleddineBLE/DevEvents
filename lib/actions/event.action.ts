'use server';

import Event, { IEvent } from '@/database/event.model';
import connectDB from "@/lib/mongodb";

export const getSimilarEventsBySlug = async (slug: string): Promise<IEvent[]> => {
    try {
        await connectDB();
        const event = await Event.findOne({ slug });

        // If event not found, return empty array
        if (!event) {
            return [];
        }

        const similarEvents = await Event.find({ 
            _id: { $ne: event._id }, 
            tags: { $in: event.tags } 
        })
        .sort({ createdAt: -1 }) // Sort by newest first
        .limit(6) // Limit results to prevent too many matches
        .lean()
        .exec();

        // Convert to plain objects for Next.js serialization
        return JSON.parse(JSON.stringify(similarEvents));
    } catch (error) {
        console.error('Error fetching similar events:', error);
        return []; // Return empty array on error
    }
}