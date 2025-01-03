import React from "react";
import "./SizeTable.scss";

const SizeTable = () => {
    const sizes = [
        { size: "S", bust: "84-88", waist: "58-66", hips: "85-95" },
        { size: "M", bust: "88-92", waist: "66-72", hips: "90-100" },
        { size: "L", bust: "92-96", waist: "70-78", hips: "95 -105" },
        { size: "XL", bust: "96-102", waist: "78-86", hips: "104-110" },
    ];

                // S: груди 84-88 см, талія 58-66 см, стегна 85-95 см
                // М: груди 88-92 см, талія 66-72 см, стегна 90-100 см
                // L: груди 92-96 см, талія 70-78 см, стегна 95 -105 см
                // XL: груди 96-102 см, талія 78-86 см, стегна 104-110 см

    return (
        <div className="size-table">
            <h2 className="size-table__title">Розмірна сітка:</h2>
            <table className="size-table__table">
                <thead>
                    <tr>
                        <th>Розмір</th>
                        <th>Груди (см)</th>
                        <th>Талія (см)</th>
                        <th>Стегна (см)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sizes.map((item) => (
                            <tr key={item.size}>
                                <td>{item.size}</td>
                                <td>{item.bust}</td>
                                <td>{item.waist}</td>
                                <td>{item.hips}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SizeTable;