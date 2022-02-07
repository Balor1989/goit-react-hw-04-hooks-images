import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import propTypes from 'prop-types';



const Searchbar = ({ formSubmit }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        setSearchValue(e.currentTarget.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!searchValue.trim()) {
            toast.warn('Please enter what are you looking for')
            return
        }
        formSubmit(searchValue)
    }

    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={handleSubmit}>
                <button type="submit" className="SearchForm-button">
                    <FcSearch style={{ width: 25, height: 25 }} />
                </button>
                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchValue}
                    onChange={handleChange}
                />
            </form>
        </header>
    );
};
export default Searchbar

Searchbar.propTypes = {
    formSubmit: propTypes.func
};

    

    
