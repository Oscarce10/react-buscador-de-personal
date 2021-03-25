import "./index.scss"
import SearchBox from "./components/SearchBox";
import {useState} from 'react'

export default function Search() {
    const [isAtTop, setIsAtTop] = useState(false);
    const handleCloseOpenSearch = () => setIsAtTop(!isAtTop);
    const handleSearchClick = () => {
        setIsAtTop(!isAtTop);
    };
    const handleCloseClick = () => {
        setIsAtTop(!isAtTop);
    };

    return (
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
        <SearchBox
                onSearch={handleSearchClick}
                onClose={handleCloseClick}
            />
        </div>
    )
}