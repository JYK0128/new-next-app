"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MessageCircleQuestionMark, Send } from "lucide-react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, FormController, FormRicharea } from "@/components";
import { useCallbackRef } from "@/hooks";
import { useTRPC } from "@/lib/trpc";
import { cn, uuid } from "@/lib/utils";


const ChatContext = createContext({
  history: new Map<string, { question: string, answer?: string }>(),
  addRequest: (params: { uid: string, qid: string, content: string }) => {},
  addAnswer: (params: { uid: string, qid: string, content: string }) => {},
  addAnswerStream: (params: { uid: string, qid: string, content: string }) => {},
});
type ChatContext = typeof ChatContext extends React.Context<infer T> ? T : never;
const ChatProvider = ChatContext.Provider;


const fields = z.object({
  content: z.string().min(1),
}).default({
  content: "",
});
type FieldValues = z.infer<typeof fields>;

type Props = { uid: string };
function ChatHistory({ uid }: Props) {
  const { history, addAnswerStream } = useContext(ChatContext);

  const trpc = useTRPC();

  useEffect(() => {
    if (window !== undefined) {
      const subscription = trpc.chat.receiveAnswer.subscriptionOptions({ uid }).subscribe({
        onData: (data) => {
          addAnswerStream(data);
        },
      });

      return () => subscription.unsubscribe();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [lastMsgRef, setLastMsgRef] = useCallbackRef<HTMLDivElement>();

  useEffect(() => {
    lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lastMsgRef, history]);

  return (
    <div className="tw:scroll-y">
      {
        [...history.entries()].map(([qid, { question, answer }], index, array) => (
          <div
            ref={(node) => {
              if (index === array.length - 1) setLastMsgRef(node);
            }}
            key={qid}
            className="tw:p-2"
          >
            <div>
              <div className="tw:font-bold">질의</div>
              <div>{question}</div>
            </div>
            <div>
              <div className="tw:font-bold">답변</div>
              <div>{answer}</div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

function ChatPrompt({ uid }: Props) {
  const { addRequest } = useContext(ChatContext);

  const trpc = useTRPC();
  const form = useForm({
    resolver: zodResolver(fields.removeDefault()),
    defaultValues: fields._def.defaultValue(),
  });

  const { mutateAsync: sendMessage } = useMutation(trpc.chat.sendMessage.mutationOptions());

  const onSubmit: SubmitHandler<FieldValues> = (payload) => {
    const qid = uuid();
    const message = { ...payload, uid, qid };
    sendMessage(message);
    addRequest(message);
    form.reset();
  };


  return (
    <FormController
      form={form}
      onSubmit={onSubmit}
      className="tw:relative tw:flex tw:justify-end tw:items-center tw:size-full"
    >
      <FormRicharea
        name="content"
        control={form.control}
        onKeyDown={(e) => {
          if (!(e.altKey || e.shiftKey) && e.key === "Enter") {
            e.preventDefault();
            const form = e.currentTarget.closest("form");
            const submitter = form?.querySelector("button[name=\"submit\"]");
            if (submitter instanceof HTMLButtonElement) {
              e.currentTarget.closest("form")?.requestSubmit(submitter);
            }
          }
        }}
      />
      <Button type="submit" name="submit" className="tw:absolute tw:right-5">
        <Send />
      </Button>
    </FormController>
  );
}

export function ChatInner() {
  const uid = useRef(uuid());

  const [history, setHistory] = useState<ChatContext["history"]>(new Map());

  const addRequest: ChatContext["addRequest"] = (params) => {
    const { qid, content } = params;
    setHistory((prev) => {
      const q = prev.get(qid);
      if (q) return prev;

      const state = new Map(prev);
      state.set(qid, { question: content });
      return state;
    });
  };

  const addAnswer: ChatContext["addAnswer"] = (params) => {
    const { qid, content } = params;
    setHistory((prev) => {
      const q = prev.get(qid);
      if (!q) return prev;

      const state = new Map(prev);
      state.set(qid, { ...q, answer: content });
      return state;
    });
  };

  const addAnswerStream: ChatContext["addAnswerStream"] = (params) => {
    const { qid, content } = params;
    setHistory((prev) => {
      const q = prev.get(qid);
      if (!q) return prev;

      const state = new Map(prev);
      state.set(qid, { ...q, answer: (q.answer ?? "").concat(content) });
      return state;
    });
  };


  return (
    <ChatProvider value={{ history, addRequest, addAnswer, addAnswerStream }}>
      <DialogHeader>
        <DialogTitle>챗봇과 대화하기</DialogTitle>
        <DialogDescription />
      </DialogHeader>


      <ChatHistory uid={uid.current} />

      <DialogFooter>
        <ChatPrompt uid={uid.current} />
      </DialogFooter>
    </ChatProvider>
  );
}

export function Chat() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window === undefined) return;
    if (!open) return;

    history.replaceState({ modal: true }, "");

    const handlePopState = (evt: PopStateEvent) => {
      evt.preventDefault();
      setOpen(false);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className={cn(
            "tw:fixed tw:bottom-10 tw:right-10",
            "tw:p-2 tw:rounded-full",
          )}
        >
          <MessageCircleQuestionMark />
        </Button>
      </DialogTrigger>
      <DialogContent className="tw:!max-w-10/12 tw:size-10/12 tw:grid-rows-[auto_1fr_100px]">
        <ChatInner />
      </DialogContent>
    </Dialog>
  );
}
