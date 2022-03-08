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

function SingleSelect() {
	const [currentCountry, setCurrentCountry] = useState('default')

	const getValue = () => {
		return currentCountry ? options.find(c => c.value === currentCountry) : ''
	}

	const onChange = (newValue) => {
		setCurrentCountry(newValue.value)
	}

	return (
		<div>
			<Select
				classNamePrefix='custom-select'
				onChange={onChange}
				value={getValue()}
				options={options}
			/>
		</div>
	)
}

export default SingleSelect
