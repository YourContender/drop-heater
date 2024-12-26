import React from "react";
import "./ShoesSizeTable.scss";

const ShoeSizeTable = () => {
    const sizes = [
        { size: 37, footLength: "23,5 см" },
        { size: 38, footLength: "24 см" },
        { size: 39, footLength: "24,5 см" },
        { size: 40, footLength: "25 см" },
        { size: 41, footLength: "25,5 см" },
    ];

    return (
        <div className="shoe-size-table">
        <h2 className="shoe-size-table__title">Розмірна сітка</h2>
        <table className="shoe-size-table__table">
            <thead>
            <tr>
                <th>Розмір</th>
                <th>Довжина стопи</th>
            </tr>
            </thead>
            <tbody>
            {sizes.map((item) => (
                <tr key={item.size}>
                <td>{item.size}</td>
                <td>{item.footLength}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default ShoeSizeTable;