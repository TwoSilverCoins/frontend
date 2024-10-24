import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

const EditEquipment: React.FC = () => {
    const { id } = useParams<{ id: string }>();
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

    useEffect(() => {
        // Fetch equipment details using id and set state
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEquipment({ ...equipment, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add logic to update equipment data in backend
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Name' value={equipment.name} onChange={handleChange} />
            {/* Add other input fields similarly */}
            <button type='submit'>Save Changes</button>
        </form>
    );
};

export default EditEquipment;