// Import libraries
import React, { Fragment, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
// Import files
import { LOAD_TENANTS_GQL } from "../../../GraphQL/Queries";
// Import components
import Breadcrumbs from "../../layout/Breadcrumbs";
import TenantContainer from "./TenantContainer";
import UserCard from "../../common/UserCard";

const Tenants = () => {
  const [tenants, setTenants] = useState([]);
  // eslint-disable-next-line
  const { error, loading, data } = useQuery(LOAD_TENANTS_GQL);
  useEffect(() => {
    if (data) {
      setTenants(data.getAllActiveTenants);
      console.log(tenants);
    }
    // eslint-disable-next-line
  }, [data]);
  return (
    <Fragment>
      <Breadcrumbs heading="Tenants" />
      <TenantContainer>
        {tenants ? (
          tenants.map((tenant) => {
            return <UserCard key={tenant._id} tenant={tenant} />;
          })
        ) : (
          <p>No tenants to show</p>
        )}
      </TenantContainer>
    </Fragment>
  );
};
export default Tenants;
