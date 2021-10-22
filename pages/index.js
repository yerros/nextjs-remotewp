import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getSession } from "next-auth/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faBell,
  faBars,
  faTimes,
  faCog,
  faSignOutAlt,
  faHeart,
  faUsers,
  faEye,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import SimpleSideNav from "../components/nav";
import Avatar from "../components/avatar";
import StatCard from "../components/stats";
import StripedTable from "../components/table";
import Layout from "../components/layout";

const Home = ({ data }) => {
  const [results, setResults] = useState(data);

  return (
    <Layout title="Home">
      <Head>
        <title>Home</title>
      </Head>
      <div className="w-full max-w-screen-xl px-6 py-12">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold">Overview</h2>
          <div className="flex flex-wrap justify-between">
            <StatCard
              title="Subscribers"
              stat={24}
              link="/"
              icon={<FontAwesomeIcon icon={faUsers} />}
              className="mb-6 xl:mb-0"
            />
            <StatCard
              title="Total Views"
              stat={"328,743"}
              link="/"
              icon={<FontAwesomeIcon icon={faEye} />}
              statSize="text-4xl"
              className="mb-6 xl:mb-0"
            />
            <StatCard
              title="Unread Messages"
              stat={2}
              link="/"
              icon={<FontAwesomeIcon icon={faEnvelope} />}
              className="mb-6 xl:mb-0"
            />
          </div>
        </div>
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold">Recent Subscribers</h2>
          <StripedTable />
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default Home;
