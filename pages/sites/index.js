import React, { Component, useRef } from "react";
import Link from "next/link";
import Layout from "../../components/layout";
import StripedTable from "../../components/table";
import Button from "../../components/button";
import axios from "axios";

export default class sites extends Component {
  constructor() {
    super();
    this.state = {
      sites: [],
    };
  }

  componentDidMount() {
    this.getSitesData();
  }

  getSitesData = () => {
    axios
      .get("/api/sites")
      .then((res) => this.setState({ sites: res.data.sites }));
  };
  render() {
    return (
      <Layout title="Sites">
        <div className="mb-4 text-right">
          <Link href="/sites/add" passHref>
            <a className="inline-block px-4 py-2 text-sm font-medium text-center text-white bg-green-400 border border-green-400 border-solid rounded-sm cursor-pointer hover:bg-green-600 hover:border-green-600">
              Add Site
            </a>
          </Link>
        </div>
        <StripedTable data={this.state.sites} />
      </Layout>
    );
  }
}
