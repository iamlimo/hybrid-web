import React, { useContext } from "react";
import "./dashboard.css";
import { ReactComponent as Searc } from "../../images/search.svg";
import { FetchContext } from "../../context/fetchContext";
import SearchItem from "./SearchItem";

const Search = () => {
  const [data, setData] = React.useState("");
  const authFetch = useContext(FetchContext);
  const [word, setWord] = React.useState("");
  const { authAxios } = authFetch;

  React.useEffect(() => {
    const fetchSearch = async () => {
      try {
        const { data } = await authAxios.get(`search?title=${word}`);

        setData(data.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchSearch();
  }, [word]);
  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const filterData =
    data &&
    data?.filter((value) =>
      value.title.toLowerCase().includes(word.toLowerCase())
    );

  return (
    <>
      <div className="dashboard-search">
        <div className="search2">
          <Searc />
          <input
            value={word}
            type="search"
            className="input-search2"
            name="search2"
            id="search2"
            placeholder="search"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="dataResult">
        {data &&
          filterData?.map((des) => <SearchItem key={des.id} data={des} />)}
      </div>
    </>
  );
};

export default Search;
