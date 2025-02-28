"use client"

import PageNavbar, { PageNavbarIconButton, PageNavbarLeftContent, PageNavbarRightContent } from '@/components/layout/PageNavbar'
import { Notification, Profile, SearchNormal1 } from 'iconsax-react'
import PageContent from '@/components/layout/PageContent'
import { PrimaryButton } from '@/components/ui/Button'
import DebtorCreditRiskCharts from '@/components/debtor/DebtorCreditRiskCharts'

function DebtorCreditRiskChecker() {
    return (
        <div className="text-gray-500 w-full">
            <PageNavbar>
                <PageNavbarLeftContent>
                    <div className="border rounded-full w-10 h-10 all-center">
                        {/* You may use a dedicated risk icon if available */}
                        <Profile size={18} />
                    </div>
                    <div>
                        <h1 className="text-sm font-semibold text-gray-800">Debtor Credit Risk Checker</h1>
                        <p className="text-xs font-medium">
                            Analyze debtor credit risks using insightful visualizations.
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
                {/* Header for the Debtor Risk Checker Section */}
                <div className="text-sm md:pb-2 flex items-center justify-between">
                    <div>
                        <h1 className="text-gray-800 font-medium">Debtor Insights</h1>
                        <p className="text-xs">
                            Explore risk distribution and credit scores of your debtors.
                        </p>
                    </div>
                    <PrimaryButton>Refresh Data</PrimaryButton>
                </div>
                <hr className="-mx-4" />

                {/* Visualizations */}
                <DebtorCreditRiskCharts />
            </PageContent>
        </div>
    )
}

export default DebtorCreditRiskChecker
