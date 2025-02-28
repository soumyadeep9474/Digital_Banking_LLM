"use client";

import PageNavbar, {
    PageNavbarIconButton,
    PageNavbarLeftContent,
    PageNavbarPrimaryButton,
    PageNavbarRightContent,
} from "@/components/layout/PageNavbar";
import {
    Add,
    I24Support,
    DirectNotification,
    Notification,
    SearchNormal1,
    Setting4,
} from "iconsax-react";
import PageContent from "@/components/layout/PageContent";
import Tabs from "@/components/Cards/ui/tabs";
import IntegrationsList from "@/components/integrations/IntegrationsList";
import TraningAnalysis from "@/components/Cards/TraningAnalysis";
import CourseProgress from "@/components/Cards/CourseProgress";
import EmployeeSpotlight from "@/components/Cards/EmployeeSpotlight";
import TimeTracker from "@/components/Cards/TimeTracker";
import Notes from "@/components/Cards/Notes";
import StatusTracker from "@/components/Cards/StatusTracker";
import CurrentProject from "@/components/Cards/CurrentProject";
import ProfileImage from "@/components/assets/profile.png";
import Image from "next/image";
import { OutlineButton } from "@/components/ui/Button";
import CurrentBalance from "@/components/Cards/CurrentBalance";
import Transactions from "@/components/Cards/Transactions";
import { useCentralStore } from "@/Store";
import AIChatAssistant from "@/components/Cards/AIChatAssistant";

function Dashboard() {
    const { setIsSidebarOpen, isSidebarOpen, isAiChatAssistantOpen, setIsAiChatAssistantOpen } = useCentralStore();
    console.log("isAiChatAssistant", isAiChatAssistantOpen);
    return (
        <div>
            <PageNavbar>
                <PageNavbarLeftContent>
                    {/* <div className='flex items-center justify-between gap-2'> */}
                    <Image
                        src={ProfileImage}
                        alt="User"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div className="">
                        <p className="text-sm font-semibold text-gray-800">
                            Soumyadeep Das{" "}
                        </p>
                        <p className="text-xs font-medium text-gray-500">Welcome back</p>
                    </div>
                    {/* </div> */}
                </PageNavbarLeftContent>
                <PageNavbarRightContent>
                    <OutlineButton className="h-8 w-8 gap-1 md:w-auto md:border py-1 px-2 duration-200 hover:bg-gray-100 rounded-lg text-xs all-center">
                        <I24Support size={16} />
                        <span className="hidden md:inline">AI Voice Support</span>
                    </OutlineButton>

                    <PageNavbarPrimaryButton className="h-8 gap-1 bg-primary hidden py-1 px-2 duration-200 text-white rounded-lg text-xs md:flex items-center justify-center">
                        <Add size={16} />
                        <span className="hidden md:inline">AI Chat Assistant</span>
                    </PageNavbarPrimaryButton>
                </PageNavbarRightContent>
            </PageNavbar>

            <PageContent>
                {/* <div className="space-y-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                        <CurrentBalance />
                    </div>
                    <div className="space-y-4">
                        <TraningAnalysis />
                    </div>

                    <div className="space-y-4">
                        <CourseProgress />
                    </div>

                    <div className="space-y-4">
                        <EmployeeSpotlight />
                    </div>

                    <div className="space-y-4">
                        <TimeTracker />
                    </div>

                    <div className="space-y-4">
                        <Notes />
                    </div>

                    <div className="space-y-4">
                        <StatusTracker />
                    </div>

                    <div className="space-y-4">
                        <CurrentProject />
                    </div>
                </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="grid col-span-2 grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="col-span-1 sm:col-span-2 lg:col-span-2 h-fit">
                            <CurrentBalance />
                        </div>

                        {/* Remaining Items in Single Columns */}
                        <div className="col-span-1">
                            <TraningAnalysis />
                        </div>

                        <div className="col-span-1">
                            <CourseProgress />
                        </div>

                        <div className="col-span-1">
                            <EmployeeSpotlight />
                        </div>

                        <div className="col-span-1">
                            <TimeTracker />
                        </div>
                    </div>
                    <div className="grid col-span-1">
                            <Transactions />
                    </div>
                </div>
            </PageContent>
        </div>
    );
}

export default Dashboard;
