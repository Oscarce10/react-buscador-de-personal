import {useState} from "react";
import  "./index.scss"
export default function SearchBox({ onSearch, onClose}){
    const [searchText, setSearchText] = useState("");
    const handleSearchClick = () => {
        setSearchText("");
        onClose();
    }
    return (
        <div className="search-box">
            <h2 className="search-box-title">Buscador de Personal</h2>
            <div className="search-box-buttons">
                <label htmlFor="searchText">
                </label>
                <input type="text"
                       value={searchText}
                       onChange={({target: {value}}) => setSearchText(value)}
                       className={"search-box-input"}
                />
                <button onClick={onSearch}>Buscar</button>
                <button onClick={handleSearchClick}>Cerrar</button>
            </div>
        </div>
    )
}