import { Check } from "lucide-react"
import { Jost } from "next/font/google"

const jost = Jost({ subsets: ["latin"] })
const ControlSection = () => {
    return (
        <section>
            <div className={`mx-[10%] ${jost.className}`}>
                <h2 className="text-[50px] text-[#333333] leading-[50px] mb-[40px]">Что входит в услугу <br /> управления недвижимостью</h2>
                <ul className="flex flex-col flex-wrap h-[505px]">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <li className={`flex gap-2 border-t border-black py-8 ${index == 4 ? "" : "border-b"} ${index >= 5 ? "border-l" : "border-r"}`} key={index}>
                            <Check className="rounded-full bg-[#E1AF93] p-2 text-white" />
                            Проверка арендаторов (кредитная история, рекомендации)
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ControlSection