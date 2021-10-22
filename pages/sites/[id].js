import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Layout from "../../components/layout";
import InputGroup from "../../components/input";
import Button from "../../components/button";

export default function edit() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [api, setApi] = useState("");

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Update the document title using the browser API
    if (id) {
      getDataSite();
    }
  }, []);

  const getDataSite = () => {
    axios.get(`/api/sites/${id}`).then((result) => {
      const res = result.data;
      setName(res.name);
      setAddress(res.address);
      setApi(res.api);
    });
  };

  async function submitHandler(event) {
    event.preventDefault();

    if (!name || !address || !api) {
      toast.error("Username atau Password yang anda masukkan salah");
      return;
    }

    // optional: Add validation
    const result = await axios.put(`/api/sites/${id}`, {
      name: name,
      address: address,
      api: api,
    });

    if (!result.error) {
      toast.success("Succefully Edited");
      setTimeout(function () {
        router.replace("/sites");
      }, 1000);
    } else {
      toast.error("Username atau Password yang anda masukkan salah");
    }
  }

  async function submitDelete(event) {
    event.preventDefault();

    if (!name || !address || !api) {
      toast.error("Username atau Password yang anda masukkan salah");
      return;
    }

    // optional: Add validation
    const result = await axios.delete(`/api/sites/${id}`);

    if (!result.error) {
      toast.success("Succefully Edited");
      setTimeout(function () {
        router.replace("/sites");
      }, 1000);
    } else {
      toast.error("Something Error Found");
    }
  }

  return (
    <Layout title="Edit Site">
      <div className="flex items-center justify-center bg-gray-200 shadow-sm rounded-xl">
        <div className="w-2/4 mt-8">
          <form>
            <div className="grid w-full grid-cols-1 gap-6">
              <InputGroup
                type="text"
                name="name"
                label="Site Name"
                placeholder="Google"
                onChange={setName}
                defaultValue={name}
                description="Please enter the site name"
              />
              <InputGroup
                type="text"
                name="address"
                label="Site Address"
                onChange={setAddress}
                defaultValue={address}
                description="Please enter your site address"
              />
              <InputGroup
                type="password"
                name="key"
                label="Api Key"
                placeholder="halshdlkeuihalshdlsa"
                onChange={setApi}
                defaultValue={api}
                description="Please enter Api Key"
              />
              <div className="flex justify-between">
                <Button
                  onClick={submitHandler}
                  className="mb-8"
                  text="Update"
                />
                <Button
                  onClick={submitDelete}
                  type="danger"
                  className="mb-8"
                  text="Delete"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
