import { User } from "./Icons/User";

export function Button({ children }) {
    return (
        <>
            <button className="w-[80px] h-[30px] rounded-full bg-black text-white">
                <div className="flex justify-center items-center">
                    <div>
                        <User></User>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </button>
        </>
    )
}

