
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useSpring, animated } from "react-spring";

interface ChoiceBoxProps {
    choice: string;
    definition: string;
    isFlipped: boolean;
}


const ChoiceBox = ({ choice, definition, isFlipped } : ChoiceBoxProps) => {
    const { rotation } = useSpring({
        rotation: isFlipped ? 180 : 0,
        config: { mass: 5, tension: 500, friction: 80 }
    });
    
    const transform = rotation.to((r) => `rotateY(${r}deg)`);
    
    return (
        <div
          className="relative w-full h-full"
          style={{ perspective: "1000px" }}
        >
          <animated.div
            className="absolute w-full h-full"
            style={{
              transform,
              transformStyle: "preserve-3d",
            }}
          >
            <animated.div
              className="absolute w-full h-full backface-hidden"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(0deg)",
              }}
            >
              <Card className="w-full h-full p-4 md:p-6 lg:p-8 flex items-center justify-center">
                <CardTitle className="w-full text-sm md:text-base lg:text-lg px-0 pt-0 text-center">
                  {choice}
                </CardTitle>
              </Card>
            </animated.div>
    
            <animated.div
              className="absolute w-full h-full backface-hidden"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <Card className="w-full h-full p-4 md:p-6 lg:p-8 flex items-center justify-center">
                <CardDescription className="w-full text-xs md:text-sm lg:text-base leading-tight md:leading-tight lg:leading-normal px-0 pt-0 text-center">
                  {definition}
                </CardDescription>
              </Card>
            </animated.div>
          </animated.div>
        </div>
    );
};
    
export default ChoiceBox;