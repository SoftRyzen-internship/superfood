import React from 'react';
import ProductPreference from '@/components/ui/ProductPreference';
import ProductAction from '@/components/ui/ProductAction';
import dataPreference from '@/data/productPreference.json';
import dataAction from '@/data/productAction.json';

import { PreferenceActionProps } from './PreferenceAction.types';

function PreferenceAction({ productId }: PreferenceActionProps) {
  const pd = dataPreference.preferences.find(item => item.id === productId);
  const ad = dataAction.actions.find(item => item.id === productId);

  if (!pd || !ad) {
    return null;
  }

  return (
    <section className="container grid py-12 xl:py[80px] gap-12 transition xl:grid-cols-2">
      <div className="flex flex-col gap-6 transition">
        <h2 className="font-bold font-geologica text-[18px] leading-[23.4px] text-green md:text-[20px] md:leading-[26px] xl:text-[26px] xl:leading-[33.8px] transition">
          {dataPreference.title}
        </h2>
        <ProductPreference preferences={pd.preference} />
      </div>
      <div className="flex flex-col gap-6 transition">
        <h2 className="font-bold font-geologica text-[18px] leading-[23.4px] text-green md:text-[20px] md:leading-[26px] xl:text-[26px] xl:leading-[33.8px] transition">
          {dataAction.title}
        </h2>
        <ProductAction actions={ad.action} />
      </div>
    </section>
  );
}

export default PreferenceAction;
