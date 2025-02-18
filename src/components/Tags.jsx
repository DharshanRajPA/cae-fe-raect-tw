export function Tags({ children }) {
    const colorOptions = [
        { primary: 'bg-green-500', secondary: 'text-green-200' },
        { primary: 'bg-red-500', secondary: 'text-red-200' },
        { primary: 'bg-blue-500', secondary: 'text-blue-200' },
        { primary: 'bg-blue-500', secondary: 'text-blue-200' },
        { primary: 'bg-amber-500', secondary: 'text-amber-200' },
        { primary: 'bg-violet-500', secondary: 'text-violet-200' },
        { primary: 'bg-pink-500', secondary: 'text-pink-200' },
    ];

    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    const { primary, secondary } = colorOptions[randomIndex];

    return (
        <button
            className={`rounded-full w-[101px] h-[29px] border border-solid m-1.5 p-1 font-medium text-xs ${primary} ${secondary}`}
        >
            {children}
        </button>
    );
}
