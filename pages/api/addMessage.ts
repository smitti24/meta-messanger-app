// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import redis from '../../redis';
import { Message } from '../../typings';

type Data = {
    message: Message;
}

type ErrorData = {
    body: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | ErrorData>
) {

    if (req.method !== 'POST') {
        res.status(405).json({ body: 'Method not allowerd' });
        return
    }

    const { message } = req.body;

    const newMessage = {
        ...message,
        createdAt: Date.now() // Replaces user timestamp with one on server
    }

    // push to redis db...
    await redis.hset('messages', message.id, JSON.stringify(message));
    res.status(200).json({ message: newMessage })
}
