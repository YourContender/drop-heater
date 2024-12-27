import React from "react";
import "./SizeTable.scss";

const SizeTable = () => {
    const sizes = [
        { size: "L", bust: "94-100", hips: "98-104" },
        { size: "XL", bust: "99-108", hips: "104-112" },
        { size: "2XL", bust: "108-115", hips: "112-118" },
        { size: "3XL", bust: "115-122", hips: "118-125" },
    ];

    return (
        <div className="size-table">
            <h2 className="size-table__title">Розмірна сітка:</h2>
            <table className="size-table__table">
                <thead>
                    <tr>
                        <th>Розмір</th>
                        <th>Груди (см)</th>
                        <th>Стегна (см)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sizes.map((item) => (
                            <tr key={item.size}>
                                <td>{item.size}</td>
                                <td>{item.bust}</td>
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