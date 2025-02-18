import { useEffect, useState } from "react";

export function Profile() {
    const [profile_img, set_profile_img] = useState();

    useEffect(() => {
        set_profile_img("https://picsum.photos/200/300");
    }, []);

    return (
        <>
            <img id="profile-picture" class="w-[50px] h-[50px] top-[5739px] left-[8966px] rounded-full border-[1.5px] border-solid border-violet-800" alt="" src={profile_img} />
        </>
    )
}

