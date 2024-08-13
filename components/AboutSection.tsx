import { Jost } from "next/font/google"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { CarouselHero } from "./CarouselHero"

const jost = Jost({ subsets: ["latin"] })
const AboutSection = () => {
    return (
        <section>
            <div className="max-w-[1440px] mx-[10%] py-[13%]">
                <div className="flex justify-between mb-10">
                    <h2 className="text-[50px] w-1/2">О компании <br /> <span className="text-[#E1AF93] text-[50px]">RMC DE LUXE</span></h2>
                    <div className="w-1/2">
                        <Tabs defaultValue="arenda" className={`w-[400px] ${jost.className}`}>
                            <TabsList className="flex justify-between">
                                <TabsTrigger value="arenda">Аренда</TabsTrigger>
                                <TabsTrigger value="kuplya">Купля-продажа</TabsTrigger>
                                <TabsTrigger value="uprav">Управление</TabsTrigger>
                            </TabsList>
                            <TabsContent value="arenda">Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды – от квартир и домов до коммерческих помещений, удовлетворяющие любые потребности <br /> <br /> Надежные арендаторы: Проведение тщательной проверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков</TabsContent>
                            <TabsContent value="kuplya">Договор купли-продажи — договор, по которому одна сторона (продавец) обязуется передать вещь (товар) в собственность другой стороне (покупателю), а покупатель обязуется принять этот товар и уплатить за него определённую денежную сумму (цену)</TabsContent>
                            <TabsContent value="uprav">Управление Управление — это подчинительная связь, при которой зависимое слово ставится в падеж, который “требует” главное слово; падеж слов не совпадает. Слово “управление” говорит само за себя: главное слово руководит зависимым. Оно словно приказывает ему, в какой падеж необходимо</TabsContent>
                        </Tabs>

                    </div>
                </div>
                <CarouselHero src="/images/about-bg.jpg" position="left-[10%] top-[10%]" />
            </div>
        </section>
    )
}

export default AboutSection