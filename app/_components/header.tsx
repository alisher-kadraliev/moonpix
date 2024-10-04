"use client"
import { Share } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "react-hot-toast";
import { createPost } from "@/action/popup";
import { useRouter } from "next/navigation";
const Header = ({ bgColor, setBlur }: { bgColor: string; setBlur: (blur: boolean) => void }) => {
    const router = useRouter()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission
        setBlur(true); // Set blur state to true
        toast.promise(
            createPost(new FormData(event.currentTarget)),
            {
                loading: 'Kurulum yapılıyor...💎',
                success: (res) => <b>{res?.success} </b>,
                error: (res) => <b>{res.error} </b>,
            }
        ).then(res => {
            setBlur(false);
            if (res?.success) {
                router.push("/compaign")
            }
        }).catch(() => {
            setBlur(false);
        });
       
    };
    console.log(bgColor)
   
    return (
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
            <h1 className="text-xl font-semibold">Kurulum </h1>

            <form onSubmit={handleSubmit} className="ml-auto">
                <input type="hidden" name="bgColor" value={bgColor} />
                <input type="hidden" name="textColor" value="white" />
                <Button
                    type="submit"
                    variant="outline"
                    size="sm"
                    className="ml-auto gap-1.5 text-sm"
                >
                    <Share className="size-3.5" />
                    Oluştur
                </Button>
            </form>
        </header>
    )
}

export default Header