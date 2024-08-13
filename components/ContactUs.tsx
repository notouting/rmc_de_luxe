import Image from "next/image"
import { Button } from "./ui/button"

const ContactUs = () => {
    return (
        <section className="my-[10%]">
            <div className="mx-[10%] bg-[#EDF3F5] h-[600px]">
                <div className="flex justify-between">
                    <form className="pl-[50px] py-[65px] flex flex-col">
                        <h2 className="text-[50px] text-[#333333] leading-[50px] mb-[40px]">Остались вопросы? <br /> Свяжитесь с нами</h2>
                        <input type="text" placeholder="ФИО *" className="border-b w-[60%] border-black mb-10 text-[16px] bg-transparent text-[#333333] py-2" required />
                        <input type="text" placeholder="Номер телефона *" className="border-b w-[60%] border-black mb-10 text-[16px] bg-transparent text-[#333333] py-2" required />
                        <input type="text" placeholder="E-mail" className="border-b w-[60%] border-black mb-10 text-[16px] bg-transparent text-[#333333] py-2" required />
                        <input type="text" placeholder="Ваш вопрос" className="border-b w-[60%] border-black mb-10 text-[16px] bg-transparent text-[#333333] py-2" required />
                        <Button type="submit" className="w-[200px] bg-[#E1AF93] rounded-none">Отправить</Button>
                    </form>
                    <Image src="/images/contact-us.jpg" className=" object-cover h-[600px]" alt="building" width={488} height={732} />
                </div>
            </div>
        </section>
    )
}

export default ContactUs