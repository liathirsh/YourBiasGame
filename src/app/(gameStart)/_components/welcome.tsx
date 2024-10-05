
import { Card, CardHeader, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


interface WelcomeProps {
    setShowIntroPage: (value: boolean) => void;
}

const Welcome = ({setShowIntroPage} : WelcomeProps) => {

    const handleClick = () => {
        setShowIntroPage(false);
    }

    return (
            <Card className="border-0 h-full w-full p-8">
                <CardHeader className="w-full px-0 pt-0">
                    Welcome to Bias Busters!
                </CardHeader>
                <CardDescription>
                    Think you can see through bias? Test your skills with this interactive quiz!
                </CardDescription>
                <></>
            <div className= "flex justify-center">
                <Button className="mt-6 p-8" type="button" onClick={handleClick}>Let&apos;s Go!</Button>
            </div>
            </Card>
    )
}


export default Welcome;