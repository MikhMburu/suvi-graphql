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
import TenantForm from "./TenantForm";
import UserCard from "../../common/UserCard";
import Spinner from "../../common/Spinner";

const Tenants = () => {
  const dispatch = useDispatch();
  const { loadTenants } = bindActionCreators(actionCreators, dispatch);
  // eslint-disable-next-line
  const { error, loading, data } = useQuery(LOAD_FULL_TENANTS_GQL);
  const tenants = useSelector((state) => state.tenant.tenants);
  useEffect(() => {
    if (data) {
      loadTenants(data.getAllActiveTenants);
    }
    // eslint-disable-next-line
  }, [data, tenants]);

  return (
    <Fragment>
      <Breadcrumbs heading="Tenants" />
      <TenantContainer>
        <div className="col-md-6">
          <TenantForm />
        </div>
        {/* {loading ? (
          <Spinner />
        ) : tenants.length === 0 ? (
          <h3 className="dispay-4 text-center text-black-50">
            No tenants to display
          </h3>
        ) : (
          tenants.map((tenant) => {
            return <UserCard key={tenant._id} tenant={tenant} />;
          })
        )} */}
      </TenantContainer>
    </Fragment>
  );
};
export default Tenants;
