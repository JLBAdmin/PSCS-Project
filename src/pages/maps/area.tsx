import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

const MapPage = dynamic(() => import('@/components/leaflet/maps'), {
  ssr: false
});

const Area: NextPage = (plotdata) => {
  return <MapPage plotcode={plotdata} />;
};

export default Area;
