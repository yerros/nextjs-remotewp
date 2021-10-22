import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Layout from "../../components/layout";
import InputGroup from "../../components/input";
import Button from "../../components/button";

export default function add() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [api, setApi] = useState("");

  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();

    if (!name || !address || !api) {
      toast.error("Username atau Password yang anda masukkan salah");
      return;
    }

    // optional: Add validation
    const result = await axios.post(`/api/sites/add`, {
      name: name,
      address: address,
      api: api,
    });

    if (!result.error) {
      toast.success("Succefully Loggedin");
      setTimeout(function () {
        router.replace("/sites");
      }, 1000);
    } else {
      toast.error("Username atau Password yang anda masukkan salah");
    }
  }

  return (
    <Layout title="Add Site">
      <div className="flex items-center justify-center bg-gray-200 shadow-sm rounded-xl">
        <div className="w-2/4 mt-8">
          <form onSubmit={submitHandler}>
            <div className="grid w-full grid-cols-1 gap-6">
              <InputGroup
                type="text"
                name="name"
                label="Site Name"
                placeholder="Google"
                onChange={setName}
                description="Please enter the site name"
              />
              <InputGroup
                type="text"
                name="address"
                label="Site Address"
                placeholder="https://google.com"
                onChange={setAddress}
                description="Please enter your site address"
              />
              <InputGroup
                type="password"
                name="key"
                label="Api Key"
                placeholder="halshdlkeuihalshdlsa"
                onChange={setApi}
                description="Please enter Api Key"
              />
              <Button submit className="mb-8" text="Submit" />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
