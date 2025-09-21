import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { z } from "zod";

import { receiveEvent, sendEvent } from "@/trpc/event";
import { publicProcedure, router } from "@/trpc/trpc";


const model = new ChatGoogleGenerativeAI({
  model: "gemma-3-12b-it",
  apiKey: process.env.GOOGLE_LLM_KEY,
});

export const chatRouter = router({
  sendMessage: publicProcedure
    .input(z.object({
      uid: z.string(),
      qid: z.string(),
      content: z.string(),
    }))
    .mutation(async ({ ctx: { user }, input }) => {
      sendEvent("question", { ...input });
      return "ok";
    }),

  receiveAnswer: publicProcedure
    .input(z.object({
      uid: z.string(),
    }))
    .subscription(async function* ({ ctx: { user }, input, signal }) {
      for await (const [message] of receiveEvent("question", { signal })) {
        if (message.uid === input.uid && message.content) {
          const answer = await model.stream(message.content);

          for await (const chunk of answer) {
            yield {
              uid: input.uid,
              qid: message.qid,
              content: chunk.content as string,
            };
          }
        }
      }
    }),
});
