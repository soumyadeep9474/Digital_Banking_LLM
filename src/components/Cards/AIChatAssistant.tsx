import { useCentralStore } from "@/Store";
import { useState } from "react";

function AIChatAssistant() {
    const { isAiChatAssistantOpen, setIsAiChatAssistantOpen } = useCentralStore();
    const [messages, setMessages] = useState<{ text: string; sender: "user" | "ai" }[]>([]);
    const [input, setInput] = useState("");

    const handleSendMessage = () => {
        if (!input.trim()) return;

        // Add user message to chat
        setMessages((prev) => [...prev, { text: input, sender: "user" }]);

        // Simulate AI response
        setTimeout(() => {
            setMessages((prev) => [...prev, { text: "This is an AI response.", sender: "ai" }]);
        }, 1000);

        setInput(""); // Clear input field
    };

    return isAiChatAssistantOpen ? (
        <div className="border text-gray-500 w-full h-fit p-3 rounded-2xl space-y-4">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-gray-800 font-medium">AI Chat Assistant</h1>
                <button onClick={() => setIsAiChatAssistantOpen(false)} className="text-red-500">
                    ✖
                </button>
            </div>

            <hr className="bg-gray-400" />

            {/* Chat Messages */}
            <div className="h-[68vh] overflow-y-auto space-y-1 px-2 py-2 bg-gray-100 rounded-md overflow-auto">
                {messages.map((msg, index) => (
                    <div key={index} className={`p-2 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-orange-200 self-end ml-auto" : "bg-gray-200 self-start"}`}>
                        {msg.text}
                    </div>
                ))}
            </div>

            {/* Input Field */}
            <div className="flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 border rounded-lg px-2 py-1 outline-none"
                    placeholder="Type a message..."
                />
                <button onClick={handleSendMessage} className="bg-primary text-white px-3 py-1 rounded-lg">Send</button>
            </div>
        </div>
    ) : null;
};

export default AIChatAssistant;