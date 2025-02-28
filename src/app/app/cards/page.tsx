"use client"

import PageNavbar, { PageNavbarIconButton, PageNavbarLeftContent, PageNavbarRightContent } from '@/components/layout/PageNavbar'
import { Add, ExportCurve, Notification, Profile, SearchNormal1 } from 'iconsax-react'
import PageContent from '@/components/layout/PageContent'
import { PrimaryButton, OutlineButton } from '@/components/ui/Button'
import CardsTable from '@/components/Cards/CardsTable'

function Cards() {
    return (
        <div className="text-gray-500 w-full">
            <PageNavbar>
                <PageNavbarLeftContent>
                    <div className="border rounded-full w-10 h-10 all-center">
                        {/* You may swap this icon with a dedicated Card icon if available */}
                        <Profile size={18} />
                    </div>
                    <div>
                        <h1 className="text-sm font-semibold text-gray-800">Cards</h1>
                        <p className="text-xs font-medium">Manage your payment and transaction cards here</p>
                    </div>
                </PageNavbarLeftContent>

                <PageNavbarRightContent>
                    <PageNavbarIconButton>
                        <SearchNormal1 size={16} />
                    </PageNavbarIconButton>
                    <PageNavbarIconButton>
                        <Notification size={16} />
                    </PageNavbarIconButton>
                </PageNavbarRightContent>
            </PageNavbar>

            <PageContent>
                {/* Header for Cards Section */}
                <div className="text-sm md:pb-2 flex items-center justify-between">
                    <div>
                        <h1 className="text-gray-800 font-medium">Card Management</h1>
                        <p className="text-xs">
                            This section is for cards. Review your card details, statuses, and manage new or existing cards.
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <OutlineButton>
                            <ExportCurve size={16} />
                            <span className="hidden md:block">Export</span>
                        </OutlineButton>
                        <PrimaryButton>
                            <Add size={16} />
                            Add New Card
                        </PrimaryButton>
                    </div>
                </div>

                <hr className="-mx-4" />

                {/* Cards Table */}
                <CardsTable />
            </PageContent>
        </div>
    )
}

export default Cards
