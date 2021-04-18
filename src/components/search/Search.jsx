import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Search = () => {
  const [state, setState] = useState({
    searchText: "",
    amount: "15",
    apiUrl: "https://pixabay.com/api/",
    apiKey: "21217288-a0bc84025ba22b55c83b72f00",
    images: [],
  });

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state.searchText);
  };

  const onAmountChange = (e, index, value) => {
    setState({ [state.amount]: value });
  };

  console.log(state);
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
      <br />
      <Select
        name="amount"
        label="Amount"
        value={state.amount}
        onChange={onTextChange}
      >
        <MenuItem value="5">5</MenuItem>
        <MenuItem value="10">10</MenuItem>
        <MenuItem value="15">15</MenuItem>
        <MenuItem value="20">20</MenuItem>
        <MenuItem value="30">30</MenuItem>
      </Select>
      <br />
    </div>
  );
};

export default Search;
