import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Layout, InputGroup, Button } from "../../../components";

export default function edit() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [api, setApi] = useState("");

  const router = useRouter();
  const { id, pid } = router.query;
  console.log(router.query);

  useEffect(() => {
    // Update the document title using the browser API
    if (pid) {
      getDataDetails();
    }
  }, []);

  const getDataDetails = () => {
    axios.get(`/api/manage/${id}?wp_id=${pid}`).then((res) => {
      console.log(res.data);
      const { title, content } = res.data;
      setTitle(title.rendered);
      setContent(content.rendered);
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
    <Layout title="Manage by wp_id">
      <div className="flex items-center justify-center bg-gray-200 shadow-sm rounded-xl">
        <div className="w-2/4 mt-8">
          <form>
            <div className="grid w-full grid-cols-1 gap-6">
              <InputGroup
                type="text"
                name="title"
                label="Title"
                placeholder="Judul Drakor"
                defaultValue={title}
                description="Please enter the title"
              />
              <div>
                <label className="text-sm text-gray-600" htmlFor="bio">
                  Personal Bio
                </label>
                <textarea
                  name="contant"
                  className="w-full px-4 py-3 transition-colors duration-150 ease-in-out border border-gray-300 rounded-sm outline-none resize-none h-52 focus:border-blue-400"
                  placeholder="Please tell us about yourself in a few sentences"
                  value={decodeURIComponent(content)}
                  onChange={(e) => setContent(e.target.value)}
                  spellCheck="false"
                ></textarea>
                <span className="mt-2 text-xs text-gray-600">
                  Maximum of 250 characters
                </span>
              </div>
              <div className="flex justify-between">
                <Button className="mb-8" text="Update" />
                <Button type="danger" className="mb-8" text="Delete" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
