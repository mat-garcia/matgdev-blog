'use client'
import Link from "next/link";
import { Button } from "./ui/button";
import {ChevronLeftIcon} from 'lucide-react'
import { useRouter } from "next/navigation";

const Header = ({
    children,screen
  }: Readonly<{
    children?: React.ReactNode;
    screen: 'main' | 'posts' | 'about' 
  }>) => {

    const router = useRouter();

    const handleBackclick = () => {
        router.back()
    }
    return ( 
        <div className="fixed  w-screen h-12 p-3 px-4 flex items-center bg-background  xl:bg-transparent">
            <h1 className="text-lg font-bold min-w-40">{'<matgdev-blog/>'}</h1>
            {(screen == 'posts' || screen ==  'about' )? (
                <div className="flex justify-between w-full items-center">
                <div className="pl-4"> / <Link href="/" className="text-cyan-400 border-b border-solid border-cyan-500">home</Link> / <b className="text-gray-300">{screen}</b> </div>
                <Button onClick={handleBackclick} variant={"outline"} size={"sm"} className="">
                    <ChevronLeftIcon className='pr-2'/> Back
                </Button>
                </div>
                
            ): ( <div className="flex pl-10  w-full items-center"><Link className="font-bold text-cyan-500 hover:text-cyan-400 border-b border-solid" href={'/about'}>About</Link></div>)}

            {children}
        </div>
     );
}
 
export default Header;