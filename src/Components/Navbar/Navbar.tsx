"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const session = useSession()


    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-3xl">Next-Auth-Explore</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {session.status === "authenticated" ? <button onClick={() => signOut()}>Logout</button> : <li><Link href={'/api/auth/signin'} >Login</Link></li>}
                    <li><Link href={'/blogs'}>Blogs</Link></li>
                    <li>
                        <details>
                            {session.status === "authenticated" ? <summary>{session?.data?.user?.name}</summary> : <summary>User Coming</summary>}
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a> Role: {session?.data?.user?.type}</a></li>
                                <li><a>{session?.data?.user?.email}</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;