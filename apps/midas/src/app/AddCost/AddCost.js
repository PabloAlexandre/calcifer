import React, { useState } from 'react'

import CategoryType from './Steps/CategoryType';
import CostType from './Steps/CostType';
import PriceDetails from './Steps/PriceDetails';

export default function AddCost({ history }) {
  const [ value, setValue ] = useState({});
  const [ step, setStep ] = useState(0);

  const steps = [
    CostType,
    CategoryType,
    PriceDetails
  ];
  
  function submit(e) {
    e.preventDefault();
    const costs = JSON.parse(localStorage.getItem('costs') || '[]');
    localStorage.setItem('costs', JSON.stringify([...costs, value]));
    history.push('/midas');
  }

  const props = {
    next: (e) => step + 1 >= steps.length ? submit(e) : setStep(step + 1),
    previous: () => setStep(step - 1),
    setField: (fieldName) => (e) => setValue({...value, [fieldName]: e.target ? e.target.value : e }),
    getField: (fieldName, defaultValue) => value[fieldName] || defaultValue
  }

  const Component = steps[step];

  return <Component {...props} />
}