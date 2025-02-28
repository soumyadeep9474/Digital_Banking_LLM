import { Table, TableBody, TableHeader, TableItem, TableRow } from '@/components/ui/Table'
import { ArrowSwapVertical, TickCircle, Slash } from 'iconsax-react'

function InvestmentsTable() {
    return (
        <div className="w-full overflow-x-auto">
            <Table>
                {/* Table Header */}
                <TableHeader>
                    <TableItem>
                        Investment ID <ArrowSwapVertical size={12} />
                    </TableItem>
                    <TableItem>
                        Investment Type <ArrowSwapVertical size={12} />
                    </TableItem>
                    <TableItem>
                        Amount Invested <ArrowSwapVertical size={12} />
                    </TableItem>
                    <TableItem>
                        Interest Rate <ArrowSwapVertical size={12} />
                    </TableItem>
                    <TableItem>
                        Duration <ArrowSwapVertical size={12} />
                    </TableItem>
                    <TableItem>
                        Maturity Amount <ArrowSwapVertical size={12} />
                    </TableItem>
                    <TableItem>
                        Status <ArrowSwapVertical size={12} />
                    </TableItem>
                </TableHeader>

                {/* Table Rows */}
                <TableBody>
                    <TableRow>
                        <TableItem>INV001</TableItem>
                        <TableItem>Fixed Deposit</TableItem>
                        <TableItem>$10,000</TableItem>
                        <TableItem>5.5%</TableItem>
                        <TableItem>5 Years</TableItem>
                        <TableItem>$13,140</TableItem>
                        <TableItem>
                            <div className="flex items-center gap-1 border rounded-full p-1">
                                <TickCircle size={16} variant="Bold" className="text-emerald-500" />
                                <p className="text-xs">Active</p>
                            </div>
                        </TableItem>
                    </TableRow>

                    <TableRow>
                        <TableItem>INV002</TableItem>
                        <TableItem>Mutual Funds</TableItem>
                        <TableItem>$5,000</TableItem>
                        <TableItem>Variable</TableItem>
                        <TableItem>3 Years</TableItem>
                        <TableItem>$6,200</TableItem>
                        <TableItem>
                            <div className="flex items-center gap-1 border rounded-full p-1">
                                <Slash size={16} variant="Bold" className="text-gray-400" />
                                <p className="text-xs">Matured</p>
                            </div>
                        </TableItem>
                    </TableRow>

                    <TableRow>
                        <TableItem>INV003</TableItem>
                        <TableItem>Recurring Deposit</TableItem>
                        <TableItem>$1,000/month</TableItem>
                        <TableItem>6.0%</TableItem>
                        <TableItem>2 Years</TableItem>
                        <TableItem>$25,200</TableItem>
                        <TableItem>
                            <div className="flex items-center gap-1 border rounded-full p-1">
                                <TickCircle size={16} variant="Bold" className="text-emerald-500" />
                                <p className="text-xs">Active</p>
                            </div>
                        </TableItem>
                    </TableRow>

                    <TableRow>
                        <TableItem>INV004</TableItem>
                        <TableItem>Stocks</TableItem>
                        <TableItem>$7,500</TableItem>
                        <TableItem>Market</TableItem>
                        <TableItem>Flexible</TableItem>
                        <TableItem>$8,500</TableItem>
                        <TableItem>
                            <div className="flex items-center gap-1 border rounded-full p-1">
                                <Slash size={16} variant="Bold" className="text-gray-400" />
                                <p className="text-xs">Ongoing</p>
                            </div>
                        </TableItem>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default InvestmentsTable
