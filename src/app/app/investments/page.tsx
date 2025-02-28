"use client"

import PageNavbar, { PageNavbarIconButton, PageNavbarLeftContent, PageNavbarRightContent } from '@/components/layout/PageNavbar'
import { Add, ExportCurve, Notification, Profile, SearchNormal1 } from 'iconsax-react'
import PageContent from '@/components/layout/PageContent'
import { PrimaryButton, OutlineButton } from '@/components/ui/Button'
import InvestmentsTable from '@/components/investments/InvestmentsTable'

function Investments() {
    return (
        <div className="text-gray-500 w-full">
            <PageNavbar>
                <PageNavbarLeftContent>
                    <div className="border rounded-full w-10 h-10 all-center">
                        <Profile size={18} />
                    </div>
                    <div>
                        <h1 className="text-sm font-semibold text-gray-800">Investments</h1>
                        <p className="text-xs font-medium">
                            Manage and review your investment portfolio and track your investment details.
                        </p>
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
                {/* Header for Investments Section */}
                <div className="text-sm md:pb-2 flex items-center justify-between">
                    <div>
                        <h1 className="text-gray-800 font-medium">Investment Details</h1>
                        <p className="text-xs">
                            This section is for investments. Review your investment types, amounts, interest rates, and statuses.
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <OutlineButton>
                            <ExportCurve size={16} />
                            <span className="hidden md:block">Export</span>
                        </OutlineButton>
                        <PrimaryButton>
                            <Add size={16} />
                            Add Investment
                        </PrimaryButton>
                    </div>
                </div>

                <hr className="-mx-4" />

                {/* Investments table */}
                <InvestmentsTable />
            </PageContent>
        </div>
    )
}

export default Investments
