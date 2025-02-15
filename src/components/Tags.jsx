export function Tags() {
    const color = [
        {
            primary: "green-500",
            secondary: "green-200"
        },
        {
            primary: "red-500",
            secondary: "red-200"
        },
        {
            primary: "blue-500",
            secondary: "blue-200"
        }
    ]
    const rand = Math.floor(Math.random() * 3);
    let className = "rounded-full m-1.5 p-1 bg-" + color[rand].primary + " text-" + color[rand].secondary;
    return (
        <>
            <button className={`rounded-full m-1.5 p-1 bg-${color[rand].primary} text-${color[rand].secondary}`} >BUASYVCASUCV</button >
        </>
    )
}

