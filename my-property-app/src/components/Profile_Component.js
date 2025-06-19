"use client";
import { useAuth } from "@/context/AuthContext"
import Welcome_Component from "./Welcome_Component";


export default function Profile_Component(){
    const { user, logout } = useAuth()

    return (
        <>
            <div className="right">
                {user ? (
                <div className="profile-dropdown">
                    <span>👤 {user.name}</span>
                    <div className="dropdown-content">
                    <p>Email: {user.email}</p>
                    <button onClick={logout}>Logout</button>
                    </div>
                </div>
                ) : (
                    null
                )}
            </div>
        </>
    )
}