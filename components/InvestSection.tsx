import { Jost } from "next/font/google"
import { Button } from "./ui/button"
import Image from "next/image"
const jost = Jost({ subsets: ["latin"] })

const InvestSection = () => {
    return (
        <section className="bg-[#EDF3F5]">
            <div className="max-w-[1440px] mx-[10%] py-[10%] flex ">
                <div className={`w-1/2 flex flex-col ${jost.className}`}>
                    <h2 className="text-[50px] leading-[50px] mb-[40px]">Инвестиции в недвижимость в Дубае</h2>
                    <p>Недвижимость в Дубае предоставляет отличные возможности для получения стабильного дохода и увеличения капитала <br /><br />Полный цикл инвестиций: От анализа рынка и подбора объектов до управления инвестициями и их реализации. <br /><br />Наши эксперты помогут вам на всех этапах инвестиционного процесса, обеспечивая высокое качество обслуживания и надежность. <br /><br />Наши услуги включают управление вашей инвестиционной недвижимостью, обеспечивая её сохранность и стабильный доход. Мы берем на себя все аспекты управления, включая подбор и проверку арендаторов, техническое обслуживание, финансовую отчетность и юридическую поддержку.</p>
                    <Button className="mt-[40px] w-[200px] bg-[#E1AF93] py-3 rounded-none">Подробнее</Button>
                </div>
                <div className="w-1/2 relative">
                    <Image className="w-[457px] absolute h-[535px] object-cover right-0 top-0" src="/images/invest-2.jpg" alt="invest" width={1648} height={998} />
                    <Image className="w-[277px] absolute h-[285px] object-cover bottom-0 left-0" src="/images/invest-1.jpg" alt="invest" width={1672} height={998} />
                </div>
            </div>
        </section>
    )
}

export default InvestSection