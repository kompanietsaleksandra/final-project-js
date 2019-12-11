import React, {useState} from "react";
import {Input, Select} from "antd";

const {Option} = Select;
const { Search } = Input;

export const Filter = ({movies, setFilteredMovies, genres}) => {
    const [valueInput, setValueInput] = useState("");
    const [valueSelect, setValueSelect] = useState("");

    const getFilteredMovies = (valueInput, valueSelect) =>  {
        return movies.reduce((acc, item) => {
            const hasAllFilters = valueInput && valueSelect;
            const hasJustTitleFilter = valueInput && !valueSelect;
            const hasJustSelectFilter = !valueInput && valueSelect;
            const checkSelectFilter = item.genre && item.genre.length &&
                item.genre.some(elem => elem.trim() === valueSelect);
            const checkTitleFilter =  item.title.toLowerCase().includes(valueInput.toLowerCase());

            if ( hasAllFilters && checkSelectFilter && checkTitleFilter ) {
                    acc.push(item);
            } else if (hasJustTitleFilter && checkTitleFilter) {
                acc.push(item);
            } else  if (hasJustSelectFilter && checkSelectFilter){
                acc.push(item);
            }
            return acc;
        },[]);
    };

    const handleChangeInput = (e) => {
        const { value } = e.target;
        setValueInput(value);
        setFilteredMovies(getFilteredMovies(value, valueSelect));
    };

    const handleChangeSelect = (value) => {
        setValueSelect(value);
        setFilteredMovies(getFilteredMovies(valueInput, value));
    };

return (
    <div className="filter">
        <div className="filter-node">
            <span>Genre:</span>
            <Select  style={{ width: 250 }} onChange={handleChangeSelect} allowClear>
                {genres.map((item, i) => <Option key={i} value={item}>{item}</Option>)}
            </Select>
            <span>Title:</span>
            <Search onChange={handleChangeInput} value={valueInput} placeholder="input search text" onSearch={value => console.log(value)} enterButton />
        </div>
    </div>
)
};