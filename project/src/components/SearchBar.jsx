
const SearchBar = ({searchText, setSearchText}) => {

  return (
    <div>
        <input 
            className="form-input"
            type="text"
            value={searchText}
            placeholder="Search employee"
            onChange={(e) => setSearchText(e.target.value)}
        />
    </div>
  )
}

export default SearchBar