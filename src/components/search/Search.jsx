import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const Search = () => {
  const [state, setState] = useState({
    searchText: "",
    apiUrl: "https://pixabay.com/api/",
    apiKey: "21217288-a0bc84025ba22b55c83b72f00",
    images: [],
  });

  useEffect(() => {
    axios
      .get(
        `${state.apiUrl}.?key=${state.apiKey}&q=${state.searchText}&image_type=photo&safesearch=true`
      )
      .then((data) => setState({ ...state, images: data.data.hits }))
      .catch((err) => console.log(err));
  }, []);

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state.searchText);
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
    </div>
  );
};

export default Search;
