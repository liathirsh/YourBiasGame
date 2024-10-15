
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useSpring, animated } from "react-spring";
import useMediaQuery from "@/app/hooks/useMediaQuery";

export interface ChoiceBoxProps {
  choice: string;
  definition: string;
  isFlipped: boolean;
  mode: 'easy' | 'hard';
}

const ChoiceBox = ({ choice, definition, isFlipped } : ChoiceBoxProps) => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const isSmallScreen = useMediaQuery('(max-width: 390px)');
  
    const { rotation } = useSpring({
        rotation: isFlipped ? 180 : 0,
        config: { mass: 5, tension: 500, friction: 80 }
    });
    
    const transform = rotation.to((r) => `rotateY(${r}deg)`);
    
    return (
        <animated.div
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
              <Card className={`w-full h-full flex items-center justify-center bg-card border border-border shadow-sm rounded-lg"
                ${ 
                  isSmallScreen
                  ? "text-xs py-2"
                  : isMobile
                  ? "text-sm p-4"
                  : "text-lg p-8"
                }`}
                >
                <CardTitle className="w-full px-0 pt-1 text-center text-foreground">
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
              <Card className="w-full h-full flex items-center justify-center bg-muted border border-border shadow-sm rounded-lg">
                <CardDescription className="w-full text-xs md:text-sm lg:text-base leading-tight md:leading-tight lg:leading-normal px-0 pt-4 text-center text-muted-foreground">
                  {definition}
                </CardDescription>
              </Card>
            </animated.div>
          </animated.div>
        </animated.div>
    );
};
    
export default ChoiceBox;