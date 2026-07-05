
const SearchBar = ({searchText, setSearchText}) => {
  console.log("search bar rendered");
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