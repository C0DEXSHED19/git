'use client'
// export const metadata = {
//   title: 'Sign In - Open PRO',
//   description: 'Page description',
// }

import { useState } from 'react';
import Link from 'next/link'
import { FormEvent } from 'react'
import axios from 'axios';



export default function SignIn(): JSX.Element {

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    // Handle form submission logic here
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const role = formData.get("role")
    const params = new URLSearchParams();
    console.log(email)
      console.log(password)
      if (email && password) {
        params.append("email", email);
        params.append("password", password);
      }
    console.log(role)
    if (role === "user") {
      
      try {
        const response = await axios.post('http://localhost:8080/api/v1/login/user-login', params.toString(), {
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
        window.alert("Something went wrong! Make sure you entered the correct credentials");
      }

    }
    else if(role == "barber") {
      const params = new URLSearchParams();
      const email = formData.get("email")?.toString() || "";
      const password = formData.get("password")?.toString() || "";

      if (email && password) {
        params.append("email", email);
        params.append("password", password);
      }

      try {
        const response = await axios.post('http://localhost:8080/api/v1/login/barber-login', params.toString(), {
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
        window.alert("Something went wrong! Make sure you entered the correct credentials");
      }
    }
    else{
      const params = new URLSearchParams();
      const email = formData.get("email")?.toString() || "";
      const password = formData.get("password")?.toString() || "";

      if (email && password) {
        params.append("email", email);
        params.append("password", password);
      }

      try {
        const response = await axios.post('http://localhost:8080/api/v1/login/user-login', params.toString(), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        if (response.status === 200) {
          window.location.href = "http://localhost:3001/companiesadmin?user="+encodeURI(email? email:'')+"&pass="+encodeURI(password?password:'');
        }
        console.log(response.data);
      } catch (error) {
        console.log(error);
        window.alert("Something went wrong! Make sure you entered the correct credentials");
      }
    }
  }

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Welcome back.</h1>
          </div>
          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                </div>
              </div>
            </form>
            <form onSubmit={handleLogin}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password</label>
                  <input id="password" type="password" name='password' className="form-input w-full text-gray-300" placeholder="Password (at least 10 characters)" required />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1">Role</label>
                  <div className="flex items-center">
                    <input id="user" type="radio" name="role" value="user" className="form-radio text-purple-600" required />
                    <label htmlFor="user" className="ml-2 text-gray-300">User</label>
                  </div>
                  <div className="flex items-center mt-2">
                    <input id="barber" type="radio" name="role" value="barber" className="form-radio text-purple-600" required />
                    <label htmlFor="barber" className="ml-2 text-gray-300">Barber</label>
                  </div>
                  <div className="flex items-center mt-2">
                    <input id="admin" type="radio" name="role" value="admin" className="form-radio text-purple-600" required />
                    <label htmlFor="admin" className="ml-2 text-gray-300">Admin</label>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign in</button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              Don’t have an account? <Link href="/signup" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign up</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
