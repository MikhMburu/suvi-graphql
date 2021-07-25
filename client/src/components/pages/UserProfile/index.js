// Import Libraries
import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// Import Files
import { LOAD_ONE_TENANT } from "../../../GraphQL/Queries";
import { actionCreators } from "../../../redux/Actions";
// Import Components
import BreadCrumbs from "../../layout/Breadcrumbs";
import ProfContainer from "./ProfContainer";
import UserSideBar from "./UserSideBar";
import MainSection from "./MainSection";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { loadATenant } = bindActionCreators(actionCreators, dispatch);
  const { user } = useParams();
  const { error, loading, data } = useQuery(LOAD_ONE_TENANT, {
    variables: {
      _id: user,
    },
  });
  console.log(data);
  useEffect(() => {
    if (!loading) {
      loadATenant(data.getOneTenant);
    }
    // eslint-disable-next-line
  }, [user, loading, data]);

  return (
    <Fragment>
      <BreadCrumbs heading="User Profile" />
      <ProfContainer>
        <UserSideBar />
        <MainSection />
      </ProfContainer>
    </Fragment>
  );
};

export default UserProfile;
