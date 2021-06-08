// Import libraries
import React, { Fragment, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
// Import files
import { LOAD_FULL_TENANTS_GQL } from "../../../GraphQL/Queries";
import { actionCreators } from "../../../redux/Actions";
// Import components
import Breadcrumbs from "../../layout/Breadcrumbs";
import TenantContainer from "./TenantContainer";
import UserCard from "../../common/UserCard";
import Spinner from "../../common/Spinner";

const Tenants = () => {
  const dispatch = useDispatch();
  const { loadTenants } = bindActionCreators(actionCreators, dispatch);
  // eslint-disable-next-line
  const { error, loading, data } = useQuery(LOAD_FULL_TENANTS_GQL);
  useEffect(() => {
    if (data) {
      loadTenants(data.getAllActiveTenants);
    }
    // console.log(data.getAllActiveTenants);
    // eslint-disable-next-line
  }, [data]);

  const tenants = useSelector((state) => state.tenant.tenants);
  console.log(tenants);
  return (
    <Fragment>
      <Breadcrumbs heading="Tenants" />
      <TenantContainer>
        {loading ? (
          <p>Loading. . .</p>
        ) : tenants ? (
          tenants.map((tenant) => {
            return <UserCard key={tenant._id} tenant={tenant} />;
          })
        ) : (
          <Spinner />
        )}
        {/* {tenants ? (
          tenants.map((tenant) => {
            return <UserCard key={tenant._id} tenant={tenant} />;
          })
        ) : (
          <p>No tenants to show</p>
        )} */}
      </TenantContainer>
    </Fragment>
  );
};
export default Tenants;
