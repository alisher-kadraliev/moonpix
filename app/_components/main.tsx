"use client"
import { useState } from "react"
import Aside from "./aside"
import Header from "./header"
import SettingLeft from "./setting-left"
import SettingRight from "./setting-right"
import Show from "./show"

export function Dashboard() {
    const [bgColor, setBgColor] = useState("#000");

    const handleColorChange = (color: string) => {
        setBgColor(color);
    };
    const [blur, setBlur] = useState(false);
    return (
        <div className={`grid h-screen w-full pl-[56px] ${blur ? 'blur' : ''}`}>
            <Aside />
            <div className="flex flex-col">
                <Header bgColor={bgColor} setBlur={setBlur} />
                <main className="grid flex-1 gap-4 overflow-auto p-4 grid-cols-5">
                  <SettingLeft onColorChange={handleColorChange} />
                    <Show bgColor={bgColor} />
                    <SettingRight />
                </main>
            </div>
        </div>
    )
}
