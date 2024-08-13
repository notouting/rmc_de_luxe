import LogoBuild from "@/lib/icons"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import { ChevronDown, Heart, Phone, Search } from "lucide-react"
import { Bellefair, Belleza, Jost } from "next/font/google"
import Link from "next/link"
import { Button } from "./ui/button"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

const belezza = Belleza({ weight: "400", subsets: ["latin"] })
const befair = Bellefair({ weight: "400", subsets: ["latin"] })
const jost = Jost({ weight: "400", subsets: ["latin"] })

const Header = () => {
    return (
        <header>
            <div className="container mx-auto px-40 py-3">
                <div className="flex items-center justify-between">
                    <Link href={"/"} role="logo" className="flex gap-[8px]">
                        <LogoBuild />
                        <div className="flex flex-col justify-center">
                            <span className={`text-[16px] ${belezza.className}`}>RMC DE LUXE</span>
                            <span className={`text-[15px] text-[#A6A6A6] ${befair.className}`}>real estate</span>
                        </div>
                    </Link>
                    <nav>
                        <ul className={`flex gap-10 text-[16px] items-center ${jost.className}`}>
                            <li>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="text-[16px] flex p-0 items-center">

                                        Услуги
                                        <ChevronDown className="ml-2 w-5 h-5" />

                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>

                                        <DropdownMenuItem>
                                            Услуги
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Другие услуги
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                            <li>
                                <Link href={"/"}>О нас</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Блог</Link>
                            </li>
                            <li>
                                <Link href={"#contacts"}>Контакты</Link>
                            </li>
                        </ul>
                    </nav>
                    <div role="buttons" className="flex gap-[12px]">
                        <Button className="w-[40px] h-[40px] rounded-full p-0" variant={'outline'}>
                            <Search className="w-5 h-5" />
                        </Button>
                        <Button className="w-[40px] h-[40px] rounded-full p-0" variant={'outline'}>
                            <Heart className="w-5 h-5" />
                        </Button>
                        <Button className="w-[40px] h-[40px] rounded-full p-0">
                            <Phone className="w-5 h-5" fill="white" />
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="text-[16px] flex px-3 py-1 items-center rounded-full border">

                                Ru
                                <ChevronDown className="w-5 h-5" />

                            </DropdownMenuTrigger>
                            <DropdownMenuContent>

                                <DropdownMenuItem>
                                    Ru
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    En
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header