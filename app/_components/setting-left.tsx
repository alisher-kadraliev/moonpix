"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RiComputerLine } from "react-icons/ri";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { CiMobile2 } from "react-icons/ci";

const SettingLeft = ({ onColorChange }: { onColorChange: (color: string) => void }) => {

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onColorChange(event.target.value); // Call the handler with the new color
    };


    return (
        <div
            className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0"
        >
            <form className="grid w-full items-start gap-6">
                <fieldset className="grid gap-6 rounded-lg border p-4">
                    <legend className="-ml-1 px-1 text-sm font-medium">
                        Settings
                    </legend>
                    <div className="grid gap-3">
                        <div className="flex gap-4">
                            <Label htmlFor="temperature">Background Color</Label>
                            <Popover>
                                <PopoverTrigger>
                                    <RiComputerLine />
                                </PopoverTrigger>
                                <PopoverContent className="flex gap-3 w-fit p-2">
                                    <div className="cursor-pointer hover:bg-gray-200 p-1 rounded-md">
                                        <CiMobile2 />
                                    </div>
                                    <div className="cursor-pointer bg-gray-200 p-1 rounded-md">
                                        <RiComputerLine />
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <Input type="color" className="w-40 h-16" onChange={handleColorChange} />
                        <div className="h-5 w-5" >
                        </div>
                    </div>
                </fieldset>

            </form>
        </div>
    )
}

export default SettingLeft