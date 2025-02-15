import { useEffect, useState } from "react";

export function Profile() {
    const [profile_img, set_profile_img] = useState();

    useEffect(() => {
        set_profile_img("https://picsum.photos/200/300");
    }, []);

    return (
        <>
            <img class="size-25 shadow-xl rounded-full" alt="" src={profile_img} />
        </>
    )
}

