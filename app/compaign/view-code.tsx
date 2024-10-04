'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Copy } from "lucide-react"
import toast from "react-hot-toast"

export function CodeViewer() {
    const ClipCopy = () => {
        toast.success('Kod kopyalandı')
        navigator.clipboard.writeText('<script src="https://moonpix.vercel.app/popup.js"></script>')
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link" className="outline-none hover:outline-none">Kodu Göster</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>Siteye yapıştırılacak kod</DialogTitle>
                    <DialogDescription>
                        Mevcut cihazınızın entegrasyonuna başlamak için aşağıdaki kodu kullanabilirsiniz.
                        Son ayarlanan pop-up sitenize işlenicektir.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="relative rounded-md bg-black p-6">
                        <pre className="py-10">
                            <code className="grid gap-1 text-sm text-white [&_span]:h-4">
                                {' <script src="https://moonpix.vercel.app/popup.js"></script>'}
                            </code>
                        </pre>
                        <Button className="absolute top-2 right-2" onClick={ClipCopy}>
                            <Copy className="size-4" />
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}