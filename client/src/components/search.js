function SearchBar(props) {
  return (
    <div className="search-bar">
      <input
        type="search"
        name="course-search"
        id="search-input"
        onChange={props.search}
        placeholder="Search here"
      />
    </div>
  );
}
export default SearchBar;