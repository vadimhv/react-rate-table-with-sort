import React, {useState} from "react";
import styles from './RateTable.module.css';

const RateTable = (props) => {

    const [search, changeSearch] = useState('');

    const nameFilter = (e) => {
        changeSearch(e.target.value);
    }

    const sorting = (e) => {
        if (e.target.value === 'name') {
            props.sortName();
        } else if (e.target.value === 'shoot') {
            props.sortShoot();
        } else if (e.target.value === 'speed') {
            props.sortSpeed();
        }
    }

    const filteredNames = props.participants.filter(p => {
        return p.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>
            <h1 className={styles.header}>
                Чемпіонат з біатлону 2016/2017
            </h1>
            <div className={styles.toggleWrapper}>
                <input type="text" onChange={nameFilter} placeholder={'Шукайте учасників за іменем...'}
                       className={styles.input}/>
                <select id="lang" onChange={sorting} className={styles.select}>
                    <option value="select">Сортування</option>
                    <option value="name">По імені</option>
                    <option value="shoot">По попаданнях</option>
                    <option value="speed">По скорострільності</option>
                </select>
            </div>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>Ім'я</th>
                        <th>Попадання</th>
                        <th>Скорострільність</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredNames.map(p => {
                        return <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.shooting}</td>
                            <td>{p.speed}</td>
                        </tr>
                    })}
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        </div>
    )
}

export default RateTable;