import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Layout, TableMange, InputGroup, Button } from "../../components";

export default function manage() {
  const [site, setSite] = useState([]);
  const [details, setDetails] = useState(false);

  const router = useRouter();
  const { id, wp_id } = router.query;

  useEffect(() => {
    // Update the document title using the browser API
    if (id) {
      getSitesData();
      console.log("rendered by id");
    }
  }, []);

  const getSitesData = () => {
    axios.get(`/api/manage/${id}`).then((res) => setSite(res.data));
  };
  const getSitesDetails = () => {
    axios
      .get(`/api/manage/${id}?wp_id=${wp_id}`)
      .then((res) => setSite(res.data));
  };

  const handleCallback = (childData) => {
    setDetails(!details);
  };

  return (
    <Layout title="Manage by _id">
      <TableMange data={site} id={id} details={handleCallback} />
    </Layout>
  );
}
