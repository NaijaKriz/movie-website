import React from "react";
import Layout from "../Layouts/Layout";
import { Input } from "../Components/UserInput";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

function Register() {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-full h-12 object-contain"
          />
          <Input
            label="Full Name"
            placeholder="Enter Your Names"
            type="text"
            bg={true}
          />
          <Input
            label="Email"
            placeholder="hdmovies@gmail.com"
            type="email"
            bg={true}
          />

          <Input
            label="Password"
            placeholder="************"
            type="Password"
            bg={true}
          />
          <Link
            to="/dashboard"
            className="bg-subMain transitions hover-bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <FiLogIn /> Sign Up
          </Link>
          <p className="text-ceter text-border">
            Already have an accoount?{""}
            <Link to="/login" className="text-drygray font-semibold ml-2">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Register;