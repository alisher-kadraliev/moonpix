import React from 'react'
import db from '@/lib/db'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { CodeViewer } from './view-code'
import { ArrowRight } from 'lucide-react'

const CompaignPage = async () => {
    const popup = await db.popUp.findMany()
    return (
        <div className="container mx-auto my-20">
            <Table>
                <TableCaption>
                    <div className="flex items-center gap-2 justify-center">
                        <span>Siteye yapıştırılacak kod</span>
                        <ArrowRight className="size-4" />
                        <CodeViewer />
                    </div>
                </TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Bg Color</TableHead>
                        <TableHead>Text Color</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {popup.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{item.bgColor}</TableCell>
                            <TableCell>{item.textColor}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
    )
}

export default CompaignPage