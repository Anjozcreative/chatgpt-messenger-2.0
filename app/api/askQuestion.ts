//Next.js API route support: https://nectjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { adminDb } from '@/firebaseAdmin'
import query from '@/lib/queryApi'
import admin from 'firebase-admin'



//striping out the following data
type Data = {
   answer: string;
}

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   const { input, chatId, model, session } = req.body;

   if (!input) {
      res.status(400).json({ answer: 'Please provide a prompt' });
      return;
   }

   if (!chatId) {
      res.status(400).json({ answer: 'please provide a valid chat ID' });
      return;
   }

   try {
      // ChatGPT Query and get a response
      const response = await query(input, chatId, model);
      console.log('OpenAI Response:', response);
   

      const message: Message = {
         text: response || 'ChatGPT was unable to reply',
         createdAt: admin.firestore.Timestamp.now(), // Fixed the timestamp retrieval method
         user: {
            _id: 'chatGPT',
            name: 'ChatGPT',
            avatar: 'https://links.papareact.com/89k',
         },
      };

      // Assuming adminDb is your Firestore database instance
      await adminDb
         .collection('user')
         .doc(session?.user?.email)
         .collection('chats')
         .doc(chatId)
         .collection('messages')
         .add(message);

      res.status(200).json({ answer: message.text });
   } catch (error) {
      console.error('Error occurred:', error);
      res.status(500).json({ answer: 'Internal Server Error' });
   }
}