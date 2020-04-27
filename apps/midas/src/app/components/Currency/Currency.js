import React, { useCallback } from 'react';

const VALID_FIRST = /^[1-9]{1}$/;
const VALID_NEXT = /^[0-9]{1}$/;
const DELETE_KEY_CODE = 8;

const CurrencyInput = ({
  className = '',
  max = Number.MAX_SAFE_INTEGER,
  onChange,
  style = {},
  value,
  component,
  ...props
}) => {

  const handleKeyDown = useCallback((e) => {
    const { key, nativeEvent, keyCode } = e;

    const realKey = key || nativeEvent.data;
    const isDeleteEvent = keyCode ? keyCode === DELETE_KEY_CODE : nativeEvent.inputType.includes('deleteContent');

    if ((parseInt(value) === 0 && !VALID_FIRST.test(realKey)) || (parseInt(value) !== 0 && !VALID_NEXT.test(realKey) && !isDeleteEvent)) {
      return;
    }

    const valueString = parseInt(value).toString();

    let nextValue;

    if (!isDeleteEvent) {
      const nextValueString = parseInt(value) === 0 ? realKey : `${valueString}${realKey}`;
      nextValue = Number.parseInt(nextValueString, 10);
    } else {
      const nextValueString = valueString.slice(0, -1);
      nextValue = nextValueString === '' ? 0 : Number.parseInt(nextValueString, 10);
    }

    if (nextValue > max) {
      return;
    }

    onChange(nextValue);
  },[max, onChange, value]);
  
  const handleChange = useCallback(() => {
    // DUMMY TO AVOID REACT WARNING
  }, []);

  const valueDisplay = (parseInt(value) / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  
  const Component = component || input;

  return (
    <Component
      className={className}
      inputMode="numeric"
      onChange={handleChange}
      onInput={handleKeyDown}
      style={style}
      value={valueDisplay}
      {...props}
    />
  );
};

export default CurrencyInput;