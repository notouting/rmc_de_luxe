import { Heart } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"



const NewBuildings = () => {
    return (
        <section className="py-[10%] overflow-hidden">
            <div className="mx-[10%] w-full ">
                <h2 className="text-[50px] text-[#333333] leading-[50px] mb-[40px]">Новостройки</h2>
                <ul className="flex h-[400px] gap-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <li className="h-[400px] overflow-hidden relative" key={index}>
                            <Image className="h-[400px] brightness-[0.7] w-[1/4] object-cover object-[60%,50%]" src="/images/new-buildings.png" alt="building" width={1303} height={732} />
                            <button className="absolute top-4 right-4 p-0">
                                <Heart className="text-white" />
                            </button>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-[26px]">Safa Two</h3>
                                <p>от $399 000</p>
                            </div>
                        </li>
                    ))
                    }
                </ul>
            </div>
            <div className="w-[200px] mx-auto">
                <Button className="mt-5 w-[200px] bg-[#E1AF93] mx-auto rounded-none">Смотреть еще</Button>
            </div>
        </section>
    )
}

export default NewBuildings