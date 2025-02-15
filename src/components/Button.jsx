import { User } from "./Icons/User";

export function Button() {
    return (
        <>
            <button className="rounded-full bg-black text-white shadow-2xl ">
                <div className="flex justify-center items-center">
                    <div>
                        <User></User>
                    </div>
                    <div>
                        <h4>button</h4>
                    </div>
                </div>
            </button>
        </>
    )
}

