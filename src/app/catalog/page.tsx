import { DataBlock } from "@/components/dataBlock";
//import { PickEffect } from "@/components/pickEffect";
import { VideoImage } from "@/components/videoImage";
import { Divider } from "@/shared/ui/divider";

import air from '@/shared/assets/images/Air.png'
import sand from '@/shared/assets/images/Sand.png'
import cement from '@/shared/assets/images/Microcement.png'
import travertin from '@/shared/assets/images/Travertine.png'
import quick from '@/shared/assets/images/Quick.png'

import a1 from "@/shared/assets/images/1-Air.png" 
import a2 from "@/shared/assets/images/1-Send.png" 
import a3 from "@/shared/assets/images/1-Microcemente.png" 
import a4 from "@/shared/assets/images/1-Travertine.png" 
import a5 from "@/shared/assets/images/1-Quick.png" 
import { RedButton } from "@/shared/ui/redButton";
import { ContactBaner } from "@/components/contactBaner";
import { FooterFormWidget } from "@/modules/footer-form";

export default function Category() {
  return (
    <>
      {/* <PickEffect /> */}
      <Divider />
      <VideoImage image={a1} />
      <DataBlock title="AIR" redTitle="Декоративне покриття" reverse={false} image={air}>
        <p><strong>Зовнішній вигляд: </strong> покриття має дуже делікатну текстуру, приглушений, заспокійливий перловий ефект. Підходить майже до всіх дизайнерських стилів в інтер’єрі. Особливо вдало виглядає у поєднанні із деревиною, металом, склом. Якщо Ви обрали саме це покриття – Ви 100% зробили кращий вибір. Будьте впевненні, воно Вам сподобається та доречно поєднається з іншими предметами інтер’єру. </p>
        <p>Рекомендації щодо особливостей застосування: Є екологічно чистим покриттям. Має європейський сертифікат стандарту якості. Не має протипоказань, щодо використання в дитячих кімнатах, або в приміщеннях для людей із алергією. Використовують зазвичай в будь-яких сухих внутрішніх приміщеннях, що не потребують частого миття стін, або хімічної обробки. Покриття слабо стійке до ударів або постійних механічних впливів. Рекомендується помірне побутове навантаження.</p>
        <div className='w-full mt-7 text-center'><RedButton linkText='Перейти до кольорів' text='Перейти до кольорів' href='/product/air-white' className='px-8' /></div>
      </DataBlock>
     


      <VideoImage image={a2} />
      <DataBlock title="Sand" redTitle="Декоративне покриття" reverse={true} image={sand}>
        <p><strong>Зовнішній вигляд: </strong> покриття має 2 ефекти: приємний мерехтливий, що додає приміщенню відчуття простору та об’єму, та приглушений, матовий, заспокійливий ефект схожий на замшеву тканину. Можна використовувати майже у всіх дизайнерських стилях в інтер’єрі. Мерехтливий ефект - особливо вдало виглядає у вітальнях, холах, Їдальнях, великих просторих приміщеннях, там де треба додати масштабності та створити атмосферу легкості. Замшевий ефект – можна вдало застосовувати в дитячих, спальнях, кабінетах, крізь, де дизайнерським задумом є створення затишку та спокою.  Кожен із ефектів чудово виглядає у поєднанні із деревиною, металом, склом.</p>

        <p><strong>Рекомендації щодо особливостей застосування:</strong> Є екологічно чистим покриттям. Має європейський сертифікат стандарту якості. Не має протипоказань, щодо використання в дитячих кімнатах, або в приміщеннях для людей із алергією. Використовують зазвичай в будь-яких сухих внутрішніх приміщеннях, що не потребують частого миття стін, або хімічної обробки. Покриття достатньо стійке до ударів, подряпин або помірних механічних впливів (якщо вплив такої сили, що не руйнує шар базової шпаклівки). Завдяки своїй шероховатій структурі має більшу здатність до накопичення пилу. Рекомендуємий догляд – сухе обезпилювання пилососом. Рекомендується помірне побутове навантаження.</p>
        <div className='w-full mt-7 text-center'><RedButton linkText='Перейти до кольорів' text='Перейти до кольорів' href='/product/sand-cool' className='px-8' /></div>
      </DataBlock>
    


      <VideoImage image={a3} />
      <DataBlock title="Microcement" redTitle="Декоративне покриття" reverse={false} image={cement}>
        <p><strong>Зовнішній вигляд: </strong> покриття має ефект дизайнерського бетону. Зазвичай використовують в сучасних, лофт або змішаних дизайнерських стилях. Для визначення ефекту в широкому розумінні використовують поняття мікроцемент. Має сучасний зовнішній вигляд, та є трендовим покриттям в більшості європейських країн світу. Може використовуватися в різних внутрішніх приміщеннях. А також в санвузлах, та в місцях, де є незначне попадання води (окрім душових кабін та поверхонь з навантаженням великої кількості води).</p>

        <p><strong>Рекомендації щодо особливостей застосування:</strong> Є екологічно чистим покриттям. Має європейський сертифікат стандарту якості. Не має протипоказань, щодо використання в дитячих кімнатах, або в приміщеннях для людей із алергією. Використовують зазвичай в будь-яких внутрішніх приміщеннях, які можуть піддаватися вологому прибиранню, навіть з використанням рідких, неагресивних побутових миючих засобів. Завдяки своїй гладенькій структурі має незначну здатність до накопичення пилу. Слабо стійка до механічних пошкоджень та подряпин. Рекомендується помірне побутове навантаження. </p>
        <div className='w-full mt-7 text-center'><RedButton linkText='Перейти до кольорів' text='Перейти до кольорів' href='/product/microcemente-ash' className='px-8' /></div>
      </DataBlock>
 


      <VideoImage image={a4} />
      <DataBlock title="Travertine" redTitle="Декоративне покриття" reverse={true} image={travertin}>
        <p><strong>Зовнішній вигляд: </strong> покриття має структуру каміння, схожу на Травертин. Підходить майже до всіх дизайнерських стилів в інтер’єрі або екстер’єрі. Має сучасний зовнішній вигляд, та є трендовим покриттям для фасадів в більшості європейських країн світу. Може використовуватися в різних внутрішніх приміщеннях особливо вдало виглядає у вітальнях, холах, їдальнях, великих просторих приміщеннях, там де треба створити атмосферу монументальності, стійкості та комфорту. Можна використовувати в санвузлах, та в місцях, де є незначне попадання води (окрім душових кабін та поверхонь з навантаженням великої кількості води). Є чудовим, якісним рішенням для дизайнерського оздоблення фасадів, як то в класичному варіанті, що схожий на оздоблення старовинних європейських будівель, так і в сучасному виконанні в стильних сірих або темних кольорах.</p>

        <p><strong>Рекомендації щодо особливостей застосування:</strong> Є екологічно чистим покриттям. Має європейський сертифікат стандарту якості. Не має протипоказань, щодо використання в приміщеннях де знаходяться діти, або в приміщеннях для людей із алергією. Використовують зазвичай в будь-яких внутрішніх приміщеннях, які можуть піддаватися вологому прибиранню, навіть з використанням рідких, неагресивних побутових миючих засобів. Має помірну стійкість до ударів, подряпин або помірних механічних впливів (якщо вплив такої сили, що не руйнує шар базової шпаклівки). Рекомендується для оздоблення фасадів. </p>
        <div className='w-full mt-7 text-center'><RedButton linkText='Перейти до кольорів' text='Перейти до кольорів' href='/product/travertine-naturale' className='px-8' /></div>
      </DataBlock>
    


      <VideoImage image={a5} />
      <DataBlock title="Quick" redTitle="Декоративне покриття" reverse={false} image={quick}>
        <p><strong>Зовнішній вигляд: </strong> покриття має тонкий шар, що відповідає шару на пофарбованій поверхні, але за рахунок декоративного розфарбування має вигляд, схожий на дизайнерський бетон або піщаник. Має трендовий зовнішній вигляд, та є цікавим дизайнерським рішенням для фасадів в італійському стилі, або різноманітних інтер’єрів. Може використовуватися в різних внутрішніх приміщеннях особливо вдало виглядає у вітальнях, холах, їдальнях, великих просторих приміщеннях, там де треба створити дизайнерський, контрольований ефект старіння поверхні. Можна використовувати в санвузлах, та в місцях, де є незначне попадання води (окрім душових кабін та поверхонь з навантаженням великої кількості води). Є чудовим, якісним рішенням для дизайнерського оздоблення фасадів, як то в класичному варіанті, що схожий на оздоблення старовинних європейських будівель, так і в сучасному виконанні, в стильних сірих або піщаних кольорах.</p>
        <p><strong>Рекомендації щодо особливостей застосування:</strong> Є екологічно чистим покриттям. Має європейський сертифікат стандарту якості. Не має протипоказань, щодо використання в приміщеннях де знаходяться діти, або в приміщеннях для людей із алергією. Використовують зазвичай в будь-яких внутрішніх приміщеннях, які можуть піддаватися вологому прибиранню, навіть з використанням рідких, неагресивних побутових миючих засобів. Має помірну стійкість до ударів, подряпин або помірних механічних впливів (якщо вплив такої сили, що не руйнує шар базової шпаклівки). Рекомендується для оздоблення фасадів. </p>
        <div className='w-full mt-7 text-center'><RedButton linkText='Перейти до кольорів' text='Перейти до кольорів' href='/product/quick-concrete' className='px-8' /></div>
      </DataBlock>
      <Divider />
    
      <ContactBaner />
      <FooterFormWidget />
    </>
  
  );
}
