import './searchBar.css'
const Search = () => {
    return (
        <>
            <nav className="searchNav">
                <form className="searchForm">
                    <div className="searchBarDiv">
                        <div className="searchBoxDiv">
                            <input type="search"/>
                        </div>

                        <div className="checkboxFilter">
                            <input type="checkbox"/>
                            <label>Full Time Only</label>
                        </div>

                        <button className="searchBtn">Search</button>
                    </div>
                </form>

            </nav>
        
        </>
    )
}

export default Search