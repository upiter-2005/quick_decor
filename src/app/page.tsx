import { Bullets } from "@/components/bullets";
import { ContactBaner } from "@/components/contactBaner";
import { DataBlock } from "@/components/dataBlock";
import { EffectChose } from "@/components/effectChose";
import { HomeBaner } from "@/components/homePage/homeBaner";
import { PickEffect } from "@/components/pickEffect";
import { Divider } from "@/shared/ui/divider";
import f1 from "@/shared/assets/images/f1.jpg"
import { FooterFormWidget } from "@/modules/footer-form";

export default function Home() {
  return (
    <>
      <HomeBaner />
      <PickEffect />
      <EffectChose />
      <ContactBaner />
   
      <Bullets />
      <Divider />
      <DataBlock title="" redTitle="Забули сказати. Ми надаємо 1 рік гарантії" reverse={false} image={f1}>
        <p>Зовнішній вигляд: покриття має дуже делікатну текстуру, приглушений, заспокійливий перловий ефект. Підходить майже до всіх дизайнерських стилів в інтер’єрі. Особливо вдало виглядає у поєднанні із деревиною, металом, склом. Якщо Ви обрали саме це покриття – Ви 100% зробили кращий вибір. Будьте впевнені, воно Вам сподобається та доречно поєднається з іншими предметами інтер’єру.</p>
        <p><strong>1. </strong>Працюємо із цією продукцією більше 10 років, та ніколи не мали проблем з якістю. (Більше 10 років на ринку)</p>
        <p><strong>2. </strong>Засновники та розробники продукції Ferrara Paint та Simpletone TM багато уваги приділяють екологічності та безпечності своєї продукції. Відмітимо, що покриття не виділяють в повітря шкідливі речовини та є  безпечними для людей та тварин протягом всього терміну використання покриття.(Не виділяють в повітря шкідливі речовини протягом всього терміну використання покриття.)</p>
        <p><strong>3.</strong> Ferrara Paint та Simpletone TM - єдина українська продукція, що має якість, підтверджену Європейським Національним Інстітутом Гігієни, та вже 2-й рік має дочірнє підприємство на території країни Європейського союзу. Поменять местами с 3(Якість підтверджено сертифікацію Європейським Національним Інститутом Гігієни)</p>
        <p><strong>4. </strong>Всі покриття допомагають досягти трендових візуальних ефектів без компромісів, щодо практичності та довговічності.(Трендові візуальні ефекти без компромісів, щодо практичності та довговічності. )</p>
        <p><strong>5.</strong> Всі майстри – декоратори команди QuickDecor пройшли навчання з роботи продукцією Ferrara Paint та Simpletone TM в головному офісі компанії - виробника «Феррара Групп» під контролем Головного Технолога.</p>
      </DataBlock>
      <Divider />
      <FooterFormWidget />
    </>
  
  );
}
