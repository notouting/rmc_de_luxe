import { Jost } from "next/font/google"
import Image from "next/image"

const jost = Jost({ subsets: ["latin"] })
const ChooseUs = () => {
    return (
        <section className={`mx-[10%] ${jost.className}`}>
            <h2 className="text-[50px] mb-[40px]">Почему выбирают нас</h2>
            <ul className="grid grid-cols-3 gap-4">
                <li className="border flex flex-col items-center justify-center gap-4 h-[236px] px-7">
                    <h3 className="text-[25px] text-center">Опыт и профессионализм</h3>
                    <p>Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг</p>
                </li>
                <li className="border flex flex-col h-[236px]">
                    <Image className="object-cover h-[236px]" src="/images/choose-1.jpg" alt="chooseus" width={960} height={640} />
                </li>
                <li className="border flex flex-col items-center justify-center gap-4 h-[236px] px-7">
                    <h3 className="text-[25px] text-center">Опыт и профессионализм</h3>
                    <p>Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг</p>
                </li>
                <li className="border flex flex-col h-[236px]">
                    <Image className="object-cover h-[236px]" src="/images/choose-2.jpg" alt="chooseus" width={960} height={640} />
                </li>
                <li className="border flex flex-col items-center justify-center gap-4 h-[236px] px-7">
                    <h3 className="text-[25px] text-center">Опыт и профессионализм</h3>
                    <p>Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг</p>
                </li>
                <li className="border flex flex-col h-[236px]">
                    <Image className="object-cover h-[236px]" src="/images/choose-3.jpg" alt="chooseus" width={960} height={640} />
                </li>
                <li className="border flex flex-col items-center justify-center gap-4 h-[236px] px-7">
                    <h3 className="text-[25px] text-center">Опыт и профессионализм</h3>
                    <p>Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг</p>
                </li>
                <li className="border flex flex-col h-[236px]">
                    <Image className="object-cover h-[236px]" src="/images/choose-4.jpg" alt="chooseus" width={960} height={640} />
                </li>
                <li className="border flex flex-col items-center justify-center gap-4 h-[236px] px-7">
                    <h3 className="text-[25px] text-center">Опыт и профессионализм</h3>
                    <p>Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг</p>
                </li>
            </ul>
        </section>
    )
}

export default ChooseUs