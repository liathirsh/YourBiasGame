
const WelcomeLayout = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className="h-full flex items-center justify-center px-4 md:px-0"> 
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                {children} 
            </div>
        </div>
    )
}

export default WelcomeLayout;
