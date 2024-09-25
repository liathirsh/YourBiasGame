"use client";

import { Card, CardHeader, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export const Tutorial = () => {

    return (
        <Card className="border-0 w-full h-full p-8">
            <CardHeader className="w-full px-0 pt-0">
                How To Play
            </CardHeader>
            <CardDescription>
                You will be given a situation and you will have to choose the bias that represents the situation. 
                Think you have what it takes to be a Bias Buster?
            </CardDescription>
            <></>
            <div className= "flex justify-center">
                <Link href="/play">
                    <Button className="mt-6 p-8" type="button"> Let&apos;s Play!</Button>
                </Link>
            </div>
        </Card>
    );
};