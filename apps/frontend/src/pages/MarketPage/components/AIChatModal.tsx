import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUp, SpinnerGap, Info } from '@phosphor-icons/react';
import AnimatedText from './AnimatedText';

interface AIChatModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

const AIChatModal: React.FC<AIChatModalProps> = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            setTimeout(() => {
                if (!isOpen) {
                    document.body.style.overflow = 'unset';
                }
            }, 350);
        };
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
        }
    }, [inputValue]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            isUser: true,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        // Simulate AI response
        setTimeout(() => {
            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: "I'm analyzing your request and will provide personalized travel recommendations based on your preferences...",
                isUser: false,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, aiMessage]);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[60] flex flex-col bg-gradient-to-b from-[#276A7D]/50 via-white/30 to-[#276A7D]/20 backdrop-blur-md"
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                    <div className="flex-shrink-0 pt-12 pb-10 px-4 flex items-center justify-between relative">
                        <button
                            onClick={onClose}
                            className="absolute left-4 top-1/2 -translate-y-1/2 mt-[18px] bg-white/20 border-gradient-silver hover:bg-white/80 active:bg-white/90 rounded-full p-[12px] flex items-center justify-center transition-colors text-white"
                            aria-label="Go back"
                        >
                            <ArrowLeft size={20} weight="bold" />
                        </button>
                        <h2 className="text-lg font-medium text-white text-center flex-grow px-12 truncate bg-transparent">
                            AI Traveler
                        </h2>
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 mt-[18px] bg-white/20 border-gradient-silver hover:bg-white/80 active:bg-white/90 rounded-full p-[12px] flex items-center justify-center transition-colors text-white"
                            aria-label="Info"
                        >
                            <Info size={20} weight="bold" />
                        </button>
                    </div>

                    <div className="flex-grow overflow-y-auto no-scrollbar bg-transparent p-4 text-white">
                        {messages.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-center px-4">
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="font-sf-pro-display text-2xl sm:text-3xl font-medium mb-4"
                                >
                                    <AnimatedText text="Ready to explore?" />
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="font-sf-pro-display text-lg sm:text-xl"
                                >
                                    <AnimatedText text="Ask me about the Kuban resorts!" />
                                </motion.p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {messages.map((message) => (
                                    <motion.div
                                        key={message.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[80%] rounded-2xl p-4 ${
                                                message.isUser
                                                    ? 'bg-black/30 backdrop-blur-sm text-white rounded-br-none'
                                                    : 'bg-black/30 backdrop-blur-sm text-white rounded-bl-none'
                                            }`}
                                        >
                                            <p className="text-sm break-words whitespace-pre-wrap">{message.text}</p>
                                            <span className="text-xs text-white/70 mt-1 block">
                                                {message.timestamp.toLocaleTimeString([], {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                })}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                                {isLoading && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex justify-start"
                                    >
                                        <div className="bg-white/20 backdrop-blur-sm text-white rounded-2xl rounded-bl-none p-4">
                                            <SpinnerGap
                                                size={20}
                                                weight="bold"
                                                className="animate-spin text-white"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        )}
                    </div>

                    <div className="flex-shrink-0 p-4 border-t border-gray-200/20">
                        <div className="flex items-end gap-2 p-4 rounded-2xl focus-within:outline-none focus-within:ring-2 focus-within:ring-[#f0d9db] bg-white/10 backdrop-blur-sm text-white placeholder-white/50 resize-none overflow-hidden min-h-[56px] max-h-[200px]">
                            <textarea
                                ref={textareaRef}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSendMessage();
                                    }
                                }}
                                placeholder="Ask about travel recommendations..."
                                className="flex-grow p-3 bg-transparent focus:outline-none"
                                rows={1}
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputValue.trim() || isLoading}
                                className="bg-white/20 backdrop-blur-sm border-gradient-silver text-white p-[12px] rounded-full hover:bg-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                            >
                                <ArrowUp size={20} weight="bold" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AIChatModal; 