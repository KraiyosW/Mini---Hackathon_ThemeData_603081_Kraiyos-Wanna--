"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Full list of possible questions based on the dashboard data
const ALL_PROMPTS = [
  { category: "พื้นที่", text: "10 จังหวัดแรกที่ต้องเฝ้าระวังคือที่ไหน?" },
  { category: "เวลา", text: "ช่วงเวลาไหนที่เกิดเหตุรุนแรงมากที่สุด?" },
  { category: "สถานที่", text: "เหตุการณ์มักเกิดในที่สาธารณะหรือที่พักอาศัย?" },
  { category: "ความสัมพันธ์", text: "ผู้กระทำส่วนใหญ่มีความสัมพันธ์อย่างไรกับเหยื่อ?" },
  { category: "กลุ่มเสี่ยง", text: "กลุ่มอายุของเหยื่อส่วนใหญ่คือช่วงไหน?" },
  { category: "ปัจจัย", text: "เหล้าและยาเสพติดส่งผลต่อความรุนแรงแค่ไหน?" },
  { category: "แนวโน้ม", text: "สรุปภาพรวมความรุนแรงในครอบครัวของไทย" },
  { category: "สาเหตุ", text: "ปัจจัยหลักที่ทำให้เกิดความรุนแรงคืออะไร?" },
];

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedPrompts, setSuggestedPrompts] = useState<typeof ALL_PROMPTS>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize with a random set of 4 prompts
  useEffect(() => {
    getRandomPrompts();
  }, []);

  const getRandomPrompts = () => {
    const shuffled = [...ALL_PROMPTS].sort(() => 0.5 - Math.random());
    setSuggestedPrompts(shuffled.slice(0, 4));
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: "user", content: text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages as Message[]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();
      if (data.choices?.[0]?.message) {
        setMessages([...newMessages, data.choices[0].message] as Message[]);
        // After responding, refresh suggested prompts to keep the flow
        getRandomPrompts();
      }
    } catch (error) {
      console.error("Chat Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[380px] h-[600px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-4 bg-slate-800/50 border-b border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                <Bot className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-100">AI Data Assistant</h3>
                <p className="text-[10px] text-slate-400">Domestic Violence Insights</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-slate-400 hover:text-slate-100"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.length === 0 && (
              <div className="text-center space-y-2 py-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-indigo-400" />
                </div>
                <p className="text-sm text-slate-300 px-4">
                  สวัสดีครับ! ผมช่วยคุณวิเคราะห์ข้อมูลความรุนแรงในครอบครัวได้ ลองเลือกถามจากหัวข้อด้านล่างนี้ดูครับ
                </p>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-start gap-2 max-w-[85%]",
                  msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                )}
              >
                <div
                  className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border",
                    msg.role === "user"
                      ? "bg-slate-700 border-slate-600"
                      : "bg-indigo-500/20 border-indigo-500/30"
                  )}
                >
                  {msg.role === "user" ? (
                    <User className="w-3.5 h-3.5 text-slate-300" />
                  ) : (
                    <Bot className="w-3.5 h-3.5 text-indigo-400" />
                  )}
                </div>
                <div
                  className={cn(
                    "p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap",
                    msg.role === "user"
                      ? "bg-indigo-600 text-white rounded-tr-none shadow-md"
                      : "bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700 rounded-tl-none flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-indigo-400 animate-spin" />
                  <span className="text-sm text-slate-400">AI กำลังประมวลผล...</span>
                </div>
              </div>
            )}

            {/* Next Suggested Prompts - Shown after AI responds or at start */}
            {!isLoading && (
              <div className="pt-2 space-y-3">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">หัวข้อที่น่าสนใจถัดไป</span>
                  <button 
                    onClick={getRandomPrompts}
                    className="text-slate-500 hover:text-indigo-400 transition-colors"
                  >
                    <RefreshCcw className="w-3 h-3" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestedPrompts.map((prompt) => (
                    <button
                      key={prompt.text}
                      onClick={() => handleSend(prompt.text)}
                      className="text-left px-3 py-2 text-[11px] text-slate-300 bg-slate-800/40 border border-slate-700/50 rounded-lg hover:bg-slate-800 hover:border-indigo-500/50 hover:text-indigo-300 transition-all shadow-sm"
                    >
                      <span className="text-[9px] text-indigo-400 font-semibold mr-1">[{prompt.category}]</span>
                      {prompt.text}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-slate-800/30 border-t border-slate-700">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="relative flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ถามคำถามเพิ่มเติม..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isLoading}
                className="h-10 w-10 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "h-14 w-14 rounded-full shadow-2xl transition-all duration-300",
          isOpen ? "bg-slate-800 hover:bg-slate-700 rotate-90" : "bg-indigo-600 hover:bg-indigo-500"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
    </div>
  );
}
