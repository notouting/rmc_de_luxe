import { ArrowRight, EyeIcon } from "lucide-react"
import Image from "next/image"

const Vlog = () => {
    return (
        <section>
            <div className="mx-[10%] mb-[250px]">
                <h2 className="text-[50px] text-[#333333] leading-[50px] mb-[30px]">Влог</h2>
                <ul className="grid grid-cols-3 gap-4">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <li className="relative" key={index}>
                            <Image className=" aspect-video" src={`/images/vlog-${index + 1}.jpg`} alt="vlog" width={1119} height={732} />
                            <div className="absolute bottom-[-120px] w-full p-3">
                                <h3 className="my-4">
                                    {index == 0 ? "Тенденции и прогнозы рынка недвижимости на 2024 год" : ''}
                                    {index == 1 ? "Лучшие районы для инвестиций в недвижимость" : ''}
                                    {index == 2 ? "Топ-10 новых" : ''}
                                    {index == 2 ? <br /> : ''}
                                    {index == 2 ? "жилых комплексов" : ''}
                                </h3>
                                <a href="/" className="text-[#E1AF93] flex gap-2 items-center">Подробнее

                                    <ArrowRight className="h-4 w-4" />

                                </a>
                            </div>
                            <div className="absolute bottom-0 flex w-full justify-between p-3 text-white">
                                <p>31.07.2024</p>
                                <p className="flex items-center gap-2"><EyeIcon /> {Math.floor(Math.random() * 10000)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="w-full flex justify-center mt-40">
                    <button className="bg-[#E1AF93] py-3 rounded-none text-white w-[200px]">Все статьи</button>
                </div>
            </div>
        </section>
    )
}

export default Vlog