import React, { useState, useEffect } from "react";

interface Equipment {
    id: string;
    name: string;
    category: string;
    // Include other relevant fields
}

const EquipmentList: React.FC = () => {
    const [equipments, setEquipments] = useState<Equipment[]>([]);

    useEffect(() => {
        // Fetch list of equipment from backend and set state
    }, []);

    return (
        <div>
            <h2>Equipment List</h2>
            <ul>
                {equipments.map(equipment => (
                    <li key={equipment.id}>
                    {equipment.name} - {equipment.category}
                    {/* Add edit and delete buttons with relevant logic*/}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EquipmentList;