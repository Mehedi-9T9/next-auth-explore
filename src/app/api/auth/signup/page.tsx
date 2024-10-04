"use client"
import React from 'react';
// import { json } from 'stream/consumers';


const signupPage = () => {
    const [userData, setUserData] = React.useState({ name: "", email: "", password: "", role: "" })
    const handleSingup = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault()
            console.log("signup login from line: 9", userData);
            const resp = await fetch("/api/signupUser", {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "content-type": "application/json"
                },
            })
            console.log("signup page form line: 18", resp);

        } catch (error) {
            console.log("handle Error", error);

        }



    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Signup now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSingup}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" onChange={(e) => setUserData({ ...userData, name: e.target.value })} placeholder="Type Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <input type="text" onChange={(e) => setUserData({ ...userData, role: e.target.value })} placeholder="Type Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default signupPage;