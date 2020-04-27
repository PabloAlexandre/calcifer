import React, { useState, useEffect } from 'react';

import mock from '../mock.json';
import PricingList from '../components/PricingList';
import PrevisionCard from '../components/PrevisionCard';

import { getDataFormatted } from './utils';

// const fixedCosts = getDataFormatted(mock.fixedCosts);
// const monthlyCosts = getDataFormatted(mock.monthlyCosts);
const revenue = getDataFormatted(mock.fixedRevenue);
const monthlyRevenue = getDataFormatted(mock.monthlyRevenue);

// const totalCosts = fixedCosts.reduce((sum, it) => sum + it.price, 0)
// const totalMonthCost = monthlyCosts.reduce((sum, it) => sum + it.price, 0)
const totalRevenue = revenue.reduce((sum, it) => sum + it.price, 0)
const totalMonthRevenue = monthlyRevenue.reduce((sum, it) => sum + it.price, 0)

export default function Home () {
  const [ costs, setCosts ] = useState([]);
  const [ totalCosts, setTotalCosts ] = useState(0);

  useEffect(() => {
    const costs = JSON.parse(localStorage.getItem('costs') || '[]');
    const allCosts = getDataFormatted(costs);
    const totalCosts = allCosts.reduce((sum, it) => sum + it.price, 0)

    setCosts(allCosts);
    setTotalCosts(totalCosts);
  }, []);

  return (
    <>
      <PrevisionCard title="Previsão Mensal" value={(totalRevenue + totalMonthRevenue) - (totalCosts)} />
      <PrevisionCard title="Reservas" value={200} image="https://images.unsplash.com/photo-1588349359245-46839cad1484?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80" />
      <PricingList items={revenue} title="Fontes de renda" positive />
      <PricingList items={monthlyRevenue} title="Extras Mensais" positive />
      <PricingList items={costs} title="Custos" link="/costs/add" />
    </>
  )
}