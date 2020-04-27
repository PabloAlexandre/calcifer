import React from 'react'

export const MappedIconsByCategory = {
  HOME: <span className="material-icons" style={{color: "#00A0B0" }}>home</span>,
  COMMUNICATION: <span className="material-icons" style={{color: "#5a84fc" }}>language</span>,
  SERVICES: <span className="material-icons" style={{color: "#0d0c22" }}>business_center</span>,
  CAR: <span className="material-icons" style={{color: "#8e8f94" }}>time_to_leave</span>,
  HEALTH: <span className="material-icons" style={{color: "#f57158" }}>local_hospital</span>,
  EDUCATION: <span className="material-icons" style={{color: "#77de97" }}>school</span>,
  MARKET: <span className="material-icons" style={{color: "#eb7c21" }}>shopping_cart</span>,
  CREDIT_CARD: <span className="material-icons" style={{color: "#612F74" }}>credit_card</span>,
  DEBIT: <span className="material-icons" style={{color: "#CC333F" }}>atm</span>,
  DEFAULT: <span className="material-icons" style={{color: '#77de97'}}>attach_money</span>,
};

export const MappedLabel = {
  HOME: 'Casa',
  COMMUNICATION: 'Telefonia',
  SERVICES: 'Servicos',
  CAR: 'Carro',
  HEALTH: 'Saúde',
  EDUCATION: 'Educação',
  MARKET: 'Mercado',
  CREDIT_CARD: 'Cartão',
  DEBIT: 'Débito',
  DEFAULT: 'Outros',
};

export function getIconByCategory(category) {
  return MappedIconsByCategory[category] || MappedIconsByCategory.DEFAULT;
}

export function getDataFormatted(items) {
  return items.map(it => ({
    label: it.title || it.name,
    price: it.value / 100,
    icon: getIconByCategory(it.category)
  }));
}