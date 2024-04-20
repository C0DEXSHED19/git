'use client';

import { useState } from 'react';
import Link from 'next/link'
import { FormEvent } from 'react'
import axios from 'axios';

const SignUpPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    // Handle form submission logic here
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const role = formData.get("role")
    if (role === "user") {
      const params = new URLSearchParams();
      const name: string = formData.get("name")?.toString() || "";
      const email = formData.get("email")?.toString() || "";
      const password = formData.get("password")?.toString() || "";

      if (name && email && password) {
        params.append("name", name);
        params.append("email", email);
        params.append("password", password);
      }
      try {
        const response = await axios.post('http://localhost:8080/api/v1/registration/register-user', params.toString(), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });

        if (response.status === 200) {
          window.location.href = "http://localhost:3001/companiesclient?user="+encodeURI(email? email:'')+"&pass="+encodeURI(password?password:'');
        }

        console.log(response.data);
      } catch (error) {
        console.log(error);
        window.alert("Username already taken");
      }
    }
    else {
      const params = new URLSearchParams();
      // const name: string = formData.get("name")?.toString() || "";
      const email = formData.get("email")?.toString() || "";
      const businessName = formData.get("company-name")?.toString() || "";
      const address = formData.get("address")?.toString() || "";
      const password = formData.get("password")?.toString() || "";

      if (email && businessName && address && password) {
        // params.append("name", name);
        params.append("email", email);
        params.append("businessName", businessName);
        params.append("address", address);
        params.append("password", password);
      }

      try {
        const response = await axios.post('http://localhost:8080/api/v1/registration/register-barber', params.toString(), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        if (response.status === 200) {
          window.location.href = "http://localhost:3001?user="+encodeURI(email? email:'')+"&pass="+encodeURI(password?password:'');
        }
        console.log(response.data);
      } catch (error) {
        console.log(error);
        window.alert("Username already taken");
      }
    }
  };

  const getBarberForm = () => {
    return <form onSubmit={handleFormSubmit}>
      <input type="hidden" name="role" value="barber" />
      {/* Form fields for Tab 2 */}
      
      <div className="app">
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Work Email <span className="text-red-600">*</span></label>
          <input id="email" name='email' type="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">



        <div className="w-full px-3">
          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Company Name <span className="text-red-600">*</span></label>
          <input id="company-name" name='company-name' type="text" className="form-input w-full text-gray-300" placeholder="Your company or app name" required />
        </div>
      </div>

      <div className="app">
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="address">Location <span className="text-red-600">*</span></label>
          <input id="address" name='address' type="" className="form-input w-full text-gray-300" placeholder="address" required />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
          <input id="password" name='password' type="password" className="form-input w-full text-gray-300" placeholder="Password (at least 10 characters)" required />
        </div>
      </div>
      <div className="text-sm text-gray-500 text-center">
        I agree to be contacted by BookMyCut about offers as per the <Link href="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Privacy Policy</Link>.
      </div>
      <div className="flex flex-wrap -mx-3 mt-6">
        <div className="w-full px-3">
          <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign up</button>
        </div>
      </div>
    </form>
  }

  const getUserForm = () => {
    return <form onSubmit={handleFormSubmit}>
      <input type="hidden" name="role" value="user" />
      {/* Form fields for Tab 1 */}
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Full Name <span className="text-red-600">*</span></label>
          <input id="full-name" type="text" name="name" className="form-input w-full text-gray-300" placeholder="First and last name" required />
        </div>
      </div>

      <div className="app">
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
          <input id="email" name='email' type="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
          <input id="password" name='password' type="password" className="form-input w-full text-gray-300" placeholder="Password (at least 10 characters)" required />
        </div>
      </div>
      <div className="text-sm text-gray-500 text-center">
        I agree to be contacted by BookMyCut about offers as per the <Link href="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Privacy Policy</Link>.
      </div>
      <div className="flex flex-wrap -mx-3 mt-6">
        <div className="w-full px-3">
          <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign up</button>
        </div>
      </div>
    </form>
  }

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
            <h1 className="h1">Welcome.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <div>
              <form>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full px-3">
                  </div>
                </div>
              </form>

              <div className="pb-10">
                <button className="btn bg-gray-600 mx-3" onClick={() => handleTabChange(1)}>User Sign Up</button>
                <button className="btn bg-gray-600" onClick={() => handleTabChange(2)}>Barber Sign Up</button>
              </div>

              {activeTab === 1 && getUserForm()}

              {activeTab === 2 && getBarberForm()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;