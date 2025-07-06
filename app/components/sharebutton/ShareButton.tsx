import React from "react";
import { cn } from "../../../utils/cn";

const ShareButton = ({ handler, icon, title, color }: { handler?: () => void, icon: React.ReactNode, title: string, color?: string }) => {
    console.log(color)
    return (
        <button
            onClick={handler}
            className={cn(`flex items-center  rounded-full gap-2 text-[16px]`, color)}>
            <div className={` p-1 pl-2 bg-black/20  rounded-l-full w-10`}>
                {icon}
            </div>
            <p className="w-full pr-4 ">{title}</p>

        </button>
    )

};

export default ShareButton;