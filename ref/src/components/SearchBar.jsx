
const SearchBar = ({searchText, setSearchText}) => {
  return (
    <input 
        type="string"
        placeholder="Search students"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
    />
  )
}

export default SearchBar;