
const WelcomeLayout = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className="h-full flex items-center justify-center bg-black"> 
            <div className="flex space-x-4">
                {children} 
            </div>
        </div>
    )
}

export default WelcomeLayout;
