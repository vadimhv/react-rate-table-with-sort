import React from "react";
import Search from "./Search/Search";
import Sorting from "./Sorting/Sorting";

const RateTable = () => {

    return (
        <div>
            <div>
                <Search />
                <Sorting />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Ім'я</th>
                        <th>Попадання</th>
                        <th>Скорострільність</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hauser Lisa Theresa</td>
                        <td>11</td>
                        <td>89.8c</td>
                    </tr>
                    <tr>
                        <td>Domracheva Darya</td>
                        <td>6.5</td>
                        <td>75.6</td>
                    </tr>
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </div>
    )
}

export default RateTable;