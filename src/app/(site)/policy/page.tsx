'use client';
import React, { useState, useEffect } from 'react';
import { getPolicy } from '../../../../sanity/requests';
import PolicySection from '@/sections/PolicySection';
import { PolicyContent } from '@/sections/PolicySection/PolicySection.types';

function Policy() {
  const [policyContent, setPolicyContent] = useState<PolicyContent | null>(null);

  useEffect(() => {
    getPolicy().then(content => {
      console.log(content[0]);
      setPolicyContent(content[0]);
    });
  }, []);

  return <PolicySection content={policyContent} />;
}

export default Policy;
