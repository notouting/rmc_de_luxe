import LogoBuild from "@/lib/icons"
import { Facebook, Instagram, MessageCircleMore, Send } from "lucide-react"
import { Bellefair, Belleza } from "next/font/google"
import Link from "next/link"

const nav = [
    {
        title: "Услуги",
        links: [
            "Купить",
            "Арендовать",
            "Продать",
            "Оценить",
        ],
    },
    {
        title: "Недвижимость",
        links: [
            "Квартиры",
            "Новостройки",
            "Дома и участки",
            "Коммерческая",
        ],
    },
    {
        title: "Компания",
        links: [
            "О нас",
            "Блог",
            "Контакты",
            "Связаться",
        ],
    },
    {
        title: "Другое",
        links: [
            "Ипотечный калькулятор",
            "Инвестиции в недвижимость в Дубае",
        ]
    }

]


const belezza = Belleza({ weight: "400", subsets: ["latin"] })
const befair = Bellefair({ weight: "400", subsets: ["latin"] })
const Footer = () => {
    return (
        <footer className="text-gray-600 body-font bg-[#EAEAEA] py-10">
            <div className="mx-[10%]">
                <div className="flex items-center sm:flex-row flex-col">
                    <Link href={"/"} role="logo" className="flex gap-[8px]">
                        <LogoBuild />
                        <div className="flex flex-col justify-center">
                            <span className={`text-[16px] ${belezza.className}`}>RMC DE LUXE</span>
                            <span className={`text-[15px] text-[#A6A6A6] ${befair.className}`}>real estate</span>
                        </div>
                    </Link>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start" id="contacts">
                        <a className="text-gray-500">
                            <Instagram />
                        </a>
                        <a className="ml-3 text-gray-500">
                            <Send />
                        </a>
                        <a className="ml-3 text-gray-500">
                            <MessageCircleMore />
                        </a>
                        <a className="ml-3 text-gray-500">
                            <Facebook />
                        </a>
                    </span>
                </div>
                <hr className="h-2" />

                <nav className="flex justify-between items-start">
                    {nav.map((item, index) => (
                        <div key={index}>
                            <h3 className="text-gray-500 font-bold text-[16px]">{item.title}</h3>
                            <ul className="text-gray-500 font-medium text-[14px]">
                                {item.links.map((link, index) => (
                                    <li key={index}>
                                        <Link href={"/"}>{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </div>
        </footer>
    )
}

export default Footer