
const EndGameLayout = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className="h-full flex items-center justify-center"> 
            <div className="flex space-x-4">
                {children} 
            </div>
        </div>
    )
}

export default EndGameLayout;
