import React from 'react';
import ProductPreference from '@/components/ui/ProductPreference';
import dataPreference from '@/data/productPreference.json';
import ProductAction from '@/components/ui/ProductAction';
import dataAction from '@/data/productAction.json';

function PreferenceAction() {
  return (
    <section className="container grid gap-12 transition xl:grid-cols-2">
      <div className="flex flex-col gap-6 transition">
        <h2 className="font-bold font-geologica text-[18px] leading-[23.4px] text-green md:text-[20px] md:leading-[26px] xl:text-[26px] xl:leading-[33.8px] transition">
          Переваги
        </h2>
        <ProductPreference data={dataPreference} />
      </div>
      <div className="flex flex-col gap-6 transition">
        <h2 className="font-bold font-geologica text-[18px] leading-[23.4px] text-green md:text-[20px] md:leading-[26px] xl:text-[26px] xl:leading-[33.8px] transition">
          Дія
        </h2>
        <ProductAction data={dataAction} />
      </div>
    </section>
  );
}

export default PreferenceAction;
