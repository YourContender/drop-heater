import React from "react";
import "./SizeTable.scss";

const SizeTable = ({ sizes }) => {

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