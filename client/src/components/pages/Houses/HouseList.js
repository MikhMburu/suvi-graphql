import React from "react";
import { LOAD_HOUSES_GQL } from "../../../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../redux/Actions";
// Import components
import HseListItem from "./HseListItem";
import Spinner from "../../common/Spinner";

const HouseList = () => {
  // const [hseDetails, setHseDetails] = useState(null);
  // ______Redux
  const dispatch = useDispatch();
  const { loadHouseDetails } = bindActionCreators(actionCreators, dispatch);
  const clickHandler = (obj) => {
    loadHouseDetails(obj);
  };
  const { error, loading, data } = useQuery(LOAD_HOUSES_GQL);
  if (error) console.log(error);
  if (loading) return <Spinner />;
  if (data) {
    const houses = data.getAllHouses;
    return (
      <ul className="list-group">
        {houses.map((hse) => (
          <HseListItem key={hse.hseno} house={hse} click={clickHandler} />
        ))}
      </ul>
    );
  }
};

export default HouseList;
