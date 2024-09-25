"use client";

import  Welcome  from "./_components/welcome";
import { Tutorial } from "./_components/tutorial";
import { useState } from "react";


const GameStart = () => {
    const [showIntroPage, setShowIntroPage] = useState(true);

    return (
        <div>
            {showIntroPage ? (
                <Welcome 
                    showIntroPage={showIntroPage}
                    setShowIntroPage={setShowIntroPage}
                    />
            ) : (
                <Tutorial />
            )}
        </div>
    );
};

export default GameStart;