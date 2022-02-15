import "./search-box.styles.css";

export const SearchBox = (props) => {
  const searchInputHandler = (event) => {
    const searchInputText = event.target.value;
    props.searchFunction(searchInputText);
  };

  return (
    <input
      className="search"
      type="search"
      name="searchBox"
      id="searchBox"
      placeholder="Search monsters here..."
      onChange={searchInputHandler}
    />
  );
};
