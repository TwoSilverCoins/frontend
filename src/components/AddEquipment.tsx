import React, { useState } from 'react';
import axios from 'axios';

interface Equipment {
    name: string;
    category: string;
    brand: string;
    model: string;
    serialNumber: string;
    purchaseDate: string;
    location: string;
    condition: string;
    barcode: string;
}

const AddEquipment: React.FC = () => {
    const [equipment, setEquipment] = useState<Equipment>({
        name: '',
        category: '',
        brand: '',
        model: '',
        serialNumber: '',
        purchaseDate: '',
        location: '',
        condition: '',
        barcode: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEquipment({ ...equipment, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data being sent:', equipment); // Add this to check the data
        try {
            const response = await axios.post('http://localhost:5000/api/equipments' , equipment);
            console.log(response.data); // Confirm the response from the backend
        } catch (error) {
            console.error('Error adding equipment:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Name' onChange={handleChange} />
            <input type='text' name='category' placeholder='Category' onChange={handleChange} />
            <input type='text' name='brand' placeholder='Brand' onChange={handleChange} />
            <input type='text' name='model' placeholder='Model' onChange={handleChange} />
            <input type='text' name='serialNumber' placeholder='Serial Number' onChange={handleChange} />
            <input type='text' name='purchaseDate' placeholder='Purchase Date' onChange={handleChange} />
            <input type='text' name='location' placeholder='Location' onChange={handleChange} />
            <input type='text' name='condition' placeholder='Condition' onChange={handleChange} />
            <input type='text' name='barcode' placeholder='Barcode' onChange={handleChange} />
            <button type='submit'>Add Equipment</button>
        </form>
    );
};

export default AddEquipment;