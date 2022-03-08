import React, { Component } from 'react'
import { useState } from 'react'
import Select from 'react-select'

const options = [
	{
		value: 'default',
		label: 'По умолчанию',
	},
	{
		value: 'up',
		label: 'По возрастанию',
	},
	{
		value: 'down',
		label: 'По убыванию',
	},
]

const FilterSelector = ({giveCurrentPrice}) => {
  const [currentPrice, setCurrentPrice] = useState('default')

	const getValue = () => {
		return currentPrice ? options.find(c => c.value === currentPrice) : ''
	}

	const onChange = (newValue) => {
		setCurrentPrice(newValue.value)
    giveCurrentPrice(newValue.value)
	}
    return(
    <Select
    onChange={onChange}
		value={getValue()}
		options={options}
    isSearchable={false}
    theme={(theme) => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary25: 'neutral20',
        primary: 'black',
      },
    })}
  />
    )
}

export default  FilterSelector;