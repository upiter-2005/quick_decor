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
        <p><strong>Що покриває гарантія</strong></p>
        <p><strong>- </strong>Тріщини чи відшарування, що виникли через порушення якості матеріалу.</p>
        <p><strong>- </strong>Зміни кольору чи фактури, спричинені неадекватною стійкістю матеріалів до погодних умов (якщо це не через неправильну експлуатацію).</p>
        <p><strong>- </strong> Дефекти нанесення, що сталися з вини майстрів.</p>
        <p><strong>Що не покриває гарантія</strong></p>
        <p><strong>- </strong> Механічні пошкодження, що утворилися не з вини майстра (удари, подряпини, свердління);</p>
        <p><strong>- </strong> Наслідки впливу надмірної вологи чи хімічних речовин;</p>
        <p><strong>- </strong> Проблеми, що виникли через порушення правил догляду чи експлуатації;</p>
        <p><strong>- </strong> Зміни через форс-мажорні обставини (затоплення, пожежа тощо).</p>
        <p><strong>Термін гарантії</strong></p>
        <p>Термін гарантії становить 12 місяців з дати підписання АКТУ прийому-передач.</p>

        <p>При прийомі робіт із декоративного оздоблення важливо розуміти, що деякі особливості поверхні можуть бути технічними характеристиками матеріалу або технологією нанесення і не вважаються дефектами.</p>
        <p>Щоб зберегти право на гарантійне обслуговування стін із декоративною фарбою або штукатуркою, дотримуйтеся наступних рекомендацій та вимог:</p>
        <p><strong>1. </strong> Дотримуйтесь правил експлуатації</p>
        <p><strong>2. </strong> Захистить поверхні від стороннього втручання</p>
        <p><strong>3. </strong> Наявність документів</p>
        <p><strong>4. </strong> Квитанції з оплати послуг</p>
        <p><strong>5. </strong> АКТ прийому-передачі, який Ви отримали після закінчення робот</p>
        <p><strong>6. </strong> Гарантійний сертифікат (WARRANTY CERTIFICATE)</p>


      </DataBlock>
      <Divider />
      <FooterFormWidget />
    </>
  
  );
}
