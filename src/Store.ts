import { create } from "zustand"


type pageOptions = 'DASHBOARD' | 'INTEGRATIONS' | 'SETTINGS' | 'CARDS' | 'INVESTMENTS' | 'DEBTOR' | 'TEAMS' | 'TRANSACTIONS' | 'DOCUMENTS' | 'SUPPORT'

interface centralStore {
    activePage: pageOptions
    setActivePage: (page: pageOptions) => void

    isSidebarOpen: boolean
    toggleSidebar: () => void
    setIsSidebarOpen: (isOpen: boolean) => void

    isAiChatAssistantOpen: boolean;
    toggleAiChatAssistant: () => void;
    setIsAiChatAssistantOpen: (isOpen: boolean) => void;

    isAiVoiceAssistantOpen: boolean;
    toggleAiVoiceAssistant: () => void;
    setIsAiVoiceAssistantOpen: (isOpen: boolean) => void;
}

export const useCentralStore = create<centralStore>((set, get) => ({
    activePage: 'DASHBOARD',
    setActivePage: (page) => set({ activePage: page }),

    isSidebarOpen: false,
    toggleSidebar: () => set({ isSidebarOpen: !get().isSidebarOpen }),
    setIsSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),

    isAiChatAssistantOpen: false,
    toggleAiChatAssistant: () => set({ isAiChatAssistantOpen: !get().isAiChatAssistantOpen }),
    setIsAiChatAssistantOpen: (isOpen) => set({ isAiChatAssistantOpen: isOpen }),

    isAiVoiceAssistantOpen: false,
    toggleAiVoiceAssistant: () => set({ isAiVoiceAssistantOpen: !get().isAiVoiceAssistantOpen }),
    setIsAiVoiceAssistantOpen: (isOpen) => set({ isAiVoiceAssistantOpen: isOpen }),
}))