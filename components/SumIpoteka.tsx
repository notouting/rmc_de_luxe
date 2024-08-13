import { Jost } from "next/font/google"

const jost = Jost({ subsets: ["latin"] })
const SumIpoteka = () => {
    return (
        <section className={`py-[100px] ${jost.className}`}>
            <div className="mx-[10%]">
                <h2 className="text-[50px] text-[#333333] leading-[50px] mb-[40px]">Рассчитайте ипотеку</h2>
                <form>
                    <div className="flex justify-between">
                        <div className="grid grid-cols-2 w-full">
                            <label className="text-[#b3b3b3]" htmlFor="cost">Стоимость недвижимости (у.е.)</label>
                            <label className="text-[#b3b3b3]" htmlFor="first">Первоначальный взнос (у.е.)</label>
                            <input required className="py-3 px-4 border mr-[35px] mb-[35px] w-[80%]" id="cost" type="number" placeholder="Введите стоимость" />
                            <input required className="py-3 px-4 border mr-[35px] mb-[35px] w-[80%]" id="first" type="number" placeholder="Введите размер взноса" />
                            <label className="text-[#b3b3b3]" htmlFor="year">Срок в годах</label>
                            <label className="text-[#b3b3b3]" htmlFor="bet">Ставка (%)</label>
                            <input required className="py-3 px-4 border mr-[35px] mb-[35px] w-[80%]" id="year" type="number" placeholder="Введите срок" />
                            <input required className="py-3 px-4 border mr-[35px] mb-[35px] w-[80%]" id="bet" type="number" placeholder="Введите размер ставки" />
                        </div>
                        <div className="grid grid-cols-2 w-[500px]">
                            <p className="text-[#B3B3B3]">Ежемесячный платеж</p>
                            <p className="text-[#B3B3B3]">Сумма кредита</p>
                            <p className="text-[20px] mr-[35px] mb-[35px]">4 410 у.е.</p>
                            <p className="text-[20px] mr-[35px] mb-[35px]">200 000 у.е.</p>
                            <p className="text-[#B3B3B3]">Процентная ставка</p>
                            <p className="text-[#B3B3B3]">Дата последнего платежа</p>
                            <p className="text-[20px] mr-[35px] mb-[35px]">24%</p>
                            <p className="text-[20px] mr-[35px] mb-[35px]">28 июля 2034г</p>
                        </div>
                    </div>
                    <button className="bg-[#E1AF93] py-3 rounded-none text-white w-[200px]">Рассчитать</button>
                </form>
            </div>
        </section>
    )
}

export default SumIpoteka