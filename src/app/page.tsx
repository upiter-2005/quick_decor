import { ContactBaner } from "@/components/contactBaner";
import { EffectChose } from "@/components/effectChose";
import { HomeBaner } from "@/components/homePage/homeBaner";
import { PickEffect } from "@/components/pickEffect";


export default function Home() {
  return (
    <>
      <HomeBaner />
      <PickEffect />
      <EffectChose />
      <ContactBaner />
    </>
  
  );
}
