import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>(
        [{ text: 'สวัสดีค่ะ! มีอะไรให้ช่วยเหลือเกี่ยวกับหลักสูตรบัณฑิตศึกษาไหมคะ?', isBot: true }]
    );
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatContainerRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages, isLoading]);


    const quickReplies = [
        'อยากเรียนเสาร์อาทิตย์?',
        'ปริญญาเอกมีสาขาอะไรบ้าง?',
        'สมัครเรียนวิทยาการข้อมูลคุณสมบัติมีอะไรบ้าง?'
    ];

    const handleSend = async (text?: string) => {
        const messageText = text || inputText;
        if (!messageText.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { text: messageText, isBot: false }]);
        setInputText('');
        setIsLoading(true);

        try {
            const response = await fetch('https://n8n.scmc.cmu.ac.th/webhook/grad', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id:1,
                    username: 'user',
                    message: messageText,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            
            // Assuming the API returns a message in a specific format.
            // Adjust this based on the actual API response structure.
            const botResponse = data.output || 'ขออภัยค่ะ ไม่สามารถประมวลผลคำขอได้ในขณะนี้';

            setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
        } catch (error) {
            console.error('Error fetching chatbot response:', error);
            setMessages(prev => [...prev, { text: 'ขออภัยค่ะ เกิดข้อผิดพลาดบางอย่าง', isBot: true }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chat Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 group"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                        1
                    </span>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 w-80 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 flex items-center justify-between flex-shrink-0">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold">ผู้ช่วยบัณฑิตศึกษา</h3>
                                <p className="text-xs text-indigo-100">ออนไลน์</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div ref={chatContainerRef} className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50" style={{ minHeight: 0 }}>
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex items-end gap-2 ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                                {msg.isBot && (
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                        B
                                    </div>
                                )}
                                <div
                                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                                        msg.isBot
                                            ? 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'
                                            : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-br-none'
                                    }`}
                                >
                                    <p className="text-sm whitespace-pre-line">{msg.text}</p>
                                </div>
                                {!msg.isBot && (
                                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm font-bold flex-shrink-0">
                                        U
                                    </div>
                                )}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-end gap-2 justify-start">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                    L
                                </div>
                                <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none">
                                    <p className="text-sm">กำลังพิมพ์...</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Quick Replies */}
                    <div className="px-4 py-2 bg-white border-t border-gray-200 flex-shrink-0">
                        <div className="flex flex-wrap gap-2">
                            {quickReplies.map((reply, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSend(reply)}
                                    className="text-xs px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full transition-colors"
                                >
                                    {reply}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-white border-t border-gray-200 flex-shrink-0">
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="พิมพ์ข้อความ..."
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm"
                                disabled={isLoading}
                            />
                            <button
                                onClick={() => handleSend()}
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full p-2 hover:shadow-lg transition-all disabled:opacity-50"
                                disabled={isLoading}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
