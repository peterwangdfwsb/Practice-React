import { useState } from "react";
import { connect } from "react-redux";

import debounce from "./utils/debounce";
import { getData } from "./redux/action-creators";

function App({
  getSearchReslut,
  filteredSearchResult
}) {
  const [input, setInput] = useState("");

  const handleInputChange = e => {
    setInput(e.target.value);
    getSearchReslut(e.target.value);
  }

  return (
    <div className="App">
      <form>
        <input value={input} onChange={handleInputChange}/>
        {filteredSearchResult && (
          <ul>
            {filteredSearchResult.map((result, index) => (
              <li key={`${result}+${index}`}>{result}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  filteredSearchResult: state
});

const mapDispatchToProps = dispatch => ({
  getSearchReslut: debounce((term) => {
    dispatch(getData(term));
  }, 200)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
