
const SearchBar = ({searchText, setSearchText}) => {

  return (
    <div>
        <input 
            type="text"
            value={searchText}
            placeholder="Search employee"
            onChange={(e) => setSearchText(e.target.value)}
        />
    </div>
  )
}

export default SearchBar