import { useEffect, useState } from "react";

export function Profile() {
    const [profile_img, set_profile_img] = useState();

    useEffect(() => {
        set_profile_img("https://picsum.photos/200/300");
    }, []);

    return (
        <>
            <img class="w-[59px] h-[59px] top-[5739px] left-[8966px] rounded-full" alt="" src={profile_img} />
        </>
    )
}

