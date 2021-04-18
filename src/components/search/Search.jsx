import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Search = () => {
  const [state, setState] = useState({
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api/",
    apiKey: "21217288-a0bc84025ba22b55c83b72f00",
    images: [],
  });

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state.searchText);
  };

  return (
    <div>
      <TextField
        name="searchText"
        fullWidth={true}
        value={state.searchText}
        onChange={onTextChange}
        label="Search for images"
      />
      <br />
    </div>
  );
};

export default Search;
