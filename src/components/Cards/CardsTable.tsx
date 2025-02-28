import { Table, TableBody, TableHeader, TableItem, TableRow } from '@/components/ui/Table'
import { ArrowSwapVertical, TickCircle, Slash } from 'iconsax-react'

function CardsTable() {
    return (
        <div className="w-full overflow-x-auto">
            <Table>
                {/* Table Header */}
                <TableHeader>
                    <TableItem>
                        Card ID <ArrowSwapVertical size={12} />
                    </TableItem>
                    <TableItem>
                        Card Type <ArrowSwapVertical size={12} />
                    </TableItem>
                    <TableItem>
                        Card Number <ArrowSwapVertical size={12} />
                    </TableItem>
                    <TableItem>
                        Card Holder <ArrowSwapVertical size={12} />
                    </TableItem>
                    <TableItem>
                        Spending Limit <ArrowSwapVertical size={12} />
                    </TableItem>
                    <TableItem>
                        Expiry Date <ArrowSwapVertical size={12} />
                    </TableItem>
                    <TableItem>
                        Status <ArrowSwapVertical size={12} />
                    </TableItem>
                </TableHeader>

                {/* Table Rows */}
                <TableBody>
                    <TableRow>
                        <TableItem>CRD001</TableItem>
                        <TableItem>Visa Debit</TableItem>
                        <TableItem>**** **** **** 1234</TableItem>
                        <TableItem>John Doe</TableItem>
                        <TableItem>$5,000</TableItem>
                        <TableItem>12/2026</TableItem>
                        <TableItem>
                            <div className="flex items-center gap-1 border rounded-full p-1">
                                <TickCircle size={16} variant="Bold" className="text-emerald-500" />
                                <p className="text-xs">Active</p>
                            </div>
                        </TableItem>
                    </TableRow>

                    <TableRow>
                        <TableItem>CRD002</TableItem>
                        <TableItem>MasterCard Credit</TableItem>
                        <TableItem>**** **** **** 5678</TableItem>
                        <TableItem>Jane Smith</TableItem>
                        <TableItem>$10,000</TableItem>
                        <TableItem>08/2025</TableItem>
                        <TableItem>
                            <div className="flex items-center gap-1 border rounded-full p-1">
                                <Slash size={16} variant="Bold" className="text-gray-400" />
                                <p className="text-xs">Inactive</p>
                            </div>
                        </TableItem>
                    </TableRow>

                    <TableRow>
                        <TableItem>CRD003</TableItem>
                        <TableItem>Corporate Prepaid</TableItem>
                        <TableItem>**** **** **** 9012</TableItem>
                        <TableItem>Alex Johnson</TableItem>
                        <TableItem>$3,000</TableItem>
                        <TableItem>05/2027</TableItem>
                        <TableItem>
                            <div className="flex items-center gap-1 border rounded-full p-1">
                                <TickCircle size={16} variant="Bold" className="text-emerald-500" />
                                <p className="text-xs">Active</p>
                            </div>
                        </TableItem>
                    </TableRow>

                    <TableRow>
                        <TableItem>CRD004</TableItem>
                        <TableItem>Virtual Card</TableItem>
                        <TableItem>**** **** **** 3456</TableItem>
                        <TableItem>Lisa Ray</TableItem>
                        <TableItem>$2,500</TableItem>
                        <TableItem>11/2024</TableItem>
                        <TableItem>
                            <div className="flex items-center gap-1 border rounded-full p-1">
                                <Slash size={16} variant="Bold" className="text-gray-400" />
                                <p className="text-xs">Expired</p>
                            </div>
                        </TableItem>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default CardsTable
