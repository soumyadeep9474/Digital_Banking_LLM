"use client"

import PageNavbar, { PageNavbarIconButton, PageNavbarLeftContent, PageNavbarPrimaryButton, PageNavbarRightContent } from '@/components/layout/PageNavbar'
import { Add, Notification, SearchNormal1, Setting4 } from 'iconsax-react'
import PageContent from '@/components/layout/PageContent'
import Tabs from '@/components/Cards/ui/tabs'
import IntegrationsList from '@/components/integrations/IntegrationsList'
import { useState } from 'react'
import { useCentralStore } from '@/Store'
import axios from 'axios';
import { OpenAI } from "openai";
import { useRouter } from "next/navigation";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, // Store API key in environment variable
    dangerouslyAllowBrowser: true, // Required for client-side requests
});

const categorizedQuestions = {
    general: [
        { question: "What can you do?", answer: "I can assist you with banking queries, integrations, and general AI-based responses." },
        { question: "How do I connect my bank?", answer: "You can connect your bank by navigating to Settings > Integrations and following the setup guide." },
        { question: "Is my data secure?", answer: "Yes, your data is end-to-end encrypted, ensuring maximum security." }
    ],
    permissions: [
        { question: "Who has full access without requiring approval?", answer: "The Admin role has full access and does not require approval." },
        { question: "Which roles require multi-level approval for transactions?", answer: "The Admin and Manager roles require multi-level approval." }
    ],
    employeeCards: [
        { question: "Which employee has the highest spending limit?", answer: "John Doe (EMP1001) has the highest spending limit of $10,000 with a Corporate Credit Card." },
        { question: "Which employee has a suspended card?", answer: "Bob Williams (EMP1004) has a Business Debit Card that is currently suspended." }
    ],
    creditRisk: [
        { question: "Which debtor has the highest credit score?", answer: "PQR Holdings (D004) has the highest credit score of 810 and a Very Low Risk Level." },
        { question: "Which debtor has the highest risk level and was rejected for a loan?", answer: "LMN Enterprises (D003) has a High Risk Level with a credit score of 550, and their loan was rejected." }
    ]
};

const navigationOptions = [
    { label: "Dashboard", path: "/app/dashboard" },
    { label: "Transactions", path: "/app/teams" },
    { label: "Investments", path: "/app/investments" },
    { label: "Cards", path: "/app/cards" },
    { label: "Debtor Credit Risk Checking", path: "/app/debtor" },
    { label: "AI Chat Assistant", path: "/app/integrations" },
];

const selectedQuestions = Object.values(categorizedQuestions).map((questions) => questions[0]);

function Integrations() {
    const [messages, setMessages] = useState<{ text: string; sender: "user" | "ai" }[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);

        if (value.startsWith('/')) {
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };

    const handleSelect = (path: string) => {
        setInput('');
        setShowSuggestions(false);
        router.push(path);
    };

    const handleSendMessage = async (message: string, predefinedAnswer?: string) => {
        if (!message.trim()) return;

        const normalizedMessage = message.trim().toLowerCase();
        const navigationMap: { [key: string]: string } = {
            "/dashboard": "/app/dashboard",
            "/transactions": "/app/teams",
            "/investments": "/app/investments",
            "/cards": "/app/cards",
            "/debtor": "/app/debtor",
            "/ai chat assistant": "/app/integrations",
        };

        if (normalizedMessage in navigationMap) {
            router.push(navigationMap[normalizedMessage]);
            return;
        }

        setMessages((prev) => [...prev, { text: message, sender: "user" }]);

        if (predefinedAnswer) {
            setTimeout(() => {
                setMessages((prev) => [...prev, { text: predefinedAnswer, sender: "ai" }]);
            }, 500);
        } else {
            setLoading(true);

            try {
                // const response = await openai.chat.completions.create({
                //     model: "gpt-3.5-turbo",
                //     messages: [
                //         { role: "system", content: "You are a financial advisor. Only provide financial advice, investment strategies, and banking-related responses. Avoid unrelated topics." },
                //         { role: "user", content: message }
                //     ],
                //     temperature: 0.5
                // });
                console.log("API Key:", process.env.NEXT_PUBLIC_OPENAI_API_KEY);
                const response = await openai.chat.completions.create({
                    model: "gpt-4o-mini",
                    messages: [
                        { role: "system", content: "You are a helpful assistant." },
                        {
                            role: "user",
                            content: "Write a haiku about recursion in programming.",
                        },
                    ],
                    store: true,
                });
                console.log("api  Response", response.choices[0].message);

                const aiResponse = response.choices[0]?.message?.content || "I’m unable to provide an answer at the moment.";
                setMessages((prev) => [...prev, { text: aiResponse, sender: "ai" }]);
            } catch (error) {
                console.error("Error fetching response:", error);
                setMessages((prev) => [...prev, { text: "Sorry, I couldn't process that.", sender: "ai" }]);
            } finally {
                setLoading(false);
            }
        }

        setInput("");
    };

    return (
        <div>
            <PageNavbar>
                <PageNavbarLeftContent>
                    <div className='border rounded-full w-10 h-10 all-center'>
                        <Setting4 size={18} />
                    </div>
                    <div>
                        <h1 className='text-sm font-semibold text-gray-800'>AI Chat Assistant</h1>
                        <p className='text-xs font-medium text-gray-500'>Manage your integrations to enhance workflow</p>
                    </div>
                </PageNavbarLeftContent>

                <PageNavbarRightContent>
                    <PageNavbarIconButton>
                        <SearchNormal1 size={16} />
                    </PageNavbarIconButton>
                    <PageNavbarIconButton>
                        <Notification size={16} />
                    </PageNavbarIconButton>
                    <PageNavbarPrimaryButton>
                        <Add size={16} />
                        <span className='hidden md:inline'>Add integration</span>
                    </PageNavbarPrimaryButton>
                </PageNavbarRightContent>
            </PageNavbar>

            <PageContent>
                {/* Chat Content */}
                <div className="border rounded-lg h-[82vh] flex flex-col bg-gray-100">
                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {messages.map((msg, index) => (
                            <div key={index} className={`max-w-xs p-2 rounded-md ${msg.sender === "user" ? "bg-orange-500 text-white self-end ml-auto" : "bg-gray-300 text-black self-start"}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Default Questions */}
                    <div className="p-3 bg-white border-t flex flex-wrap gap-2">
                        {selectedQuestions.map(({ question, answer }) => (
                            <button
                                key={question}
                                onClick={() => handleSendMessage(question, answer)}
                                className="border px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-200"
                            >
                                {question}
                            </button>
                        ))}
                    </div>

                    {/* Chat Input */}
                    <div className="p-3 bg-white flex gap-2 border-t">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                                handleChange(e);
                            }}
                            placeholder="Type a message..."
                            className="flex-1 border px-3 py-2 rounded-lg outline-none"
                        />

                        {showSuggestions && (
                            <div className="absolute bottom-24 left-80 w-fit bg-gray-100 shadow-lg border rounded-md z-50">
                                {navigationOptions.map((option) => (
                                    <div
                                        key={option.path}
                                        onClick={() => handleSelect(option.path)}
                                        className="p-2 cursor-pointer hover:bg-gray-100 text-xs"
                                    >
                                        {option.label}
                                    </div>
                                ))}
                            </div>
                        )}

                        <button onClick={() => handleSendMessage(input)} className="bg-primary text-white px-4 py-2 rounded-lg">
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </div>
                </div>
            </PageContent>

        </div>
    )
}

export default Integrations