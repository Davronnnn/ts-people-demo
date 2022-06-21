import React, { useState } from 'react';
import { AppFace as ListProps } from '../App';

interface Iprops {
	people: ListProps['people'];
	setPeople: React.Dispatch<React.SetStateAction<ListProps['people']>>;
}

const AddList: React.FC<Iprops> = (props) => {
	const [form, setForm] = useState({
		name: '',
		age: '',
		note: '',
		img: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (): void => {
		if (!form.name || !form.age || !form.img || !form.note) {
			return;
		}
		props.setPeople([
			...props.people,
			{
				name: form.name,
				age: parseInt(form.age),
				image: form.img,
				note: form.note,
			},
		]);
		setForm({ name: '', age: '', note: '', img: '' });
	};
	return (
		<form className='AddToList'>
			<input
				className='AddToList-input'
				type='text'
				placeholder='Name'
				value={form.name}
				onChange={handleChange}
				name='name'
			/>
			<input
				className='AddToList-input'
				type='text'
				placeholder='Age'
				value={form.age}
				onChange={handleChange}
				name='age'
			/>
			<input
				className='AddToList-input'
				type='text'
				placeholder='Image'
				value={form.img}
				onChange={handleChange}
				name='img'
			/>
			<textarea
				className='AddToList-input'
				placeholder='Notes'
				value={form.note}
				onChange={handleChange}
				name='note'
			/>
			<button className='AddToList-btn' onClick={handleSubmit}>
				Add to list
			</button>
		</form>
	);
};

export default AddList;
