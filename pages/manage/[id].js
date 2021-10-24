import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../components/layout";
import StripedTable from "../../components/tablemanage";

export default function manage() {
  const [site, setSite] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Update the document title using the browser API
    if (id) {
      getSitesData();
    }
  }, []);

  const getSitesData = () => {
    axios.get(`/api/manage/${id}`).then((res) => setSite(res.data));
  };
  return (
    <Layout title="Manage">
      <StripedTable data={site} />
    </Layout>
  );
}
