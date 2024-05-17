import React from 'react';
import ProductPreference from '@/components/ui/ProductPreference';
import dataPreference from '@/data/productPreference.json';
import ProductAction from '@/components/ui/ProductAction';
import dataAction from '@/data/productAction.json';
import { PreferenceActionProps } from '../ProductAction/ProductAction.types';

function PreferenceAction({ productId }: PreferenceActionProps) {
  const preference = dataPreference.find(item => item.id === productId);
  const action = dataAction.find(item => item.id === productId);

  return (
    <div className="grid gap-12 transition xl:grid-cols-2">
      <div className="flex flex-col gap-6 transition py-4 px-2">
        <h2 className="font-bold font-geologica text-[18px] leading-[23.4px] text-green md:text-[20px] md:leading-[26px] xl:text-[26px] xl:leading-[33.8px] transition">
          Переваги
        </h2>
        <ProductPreference data={preference?.productPreference || []} />
      </div>

      <div className="flex flex-col gap-6 transition">
        <h2 className="font-bold font-geologica text-[18px] leading-[23.4px] text-green md:text-[20px] md:leading-[26px] xl:text-[26px] xl:leading-[33.8px] transition">
          Дія
        </h2>
        <ProductAction data={action?.productAction || []} />
      </div>
    </div>
  );
}

export default PreferenceAction;
