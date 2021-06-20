// Import Libraries
import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
// Import Files
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
  useEffect(() => {
    if (user) {
      loadATenant(user);
    }
    // eslint-disable-next-line
  }, [user]);

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
