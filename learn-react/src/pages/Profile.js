import React from "react";
import { About } from "../components/About";

export default function Profile() {
    return (
        <div>
            <div className="profileImage">
                <img
                    src={`${process.env.PUBLIC_URL}/profile.png`}
                    alt="profile"
                    width="200px"
                    style={{ borderRadius: "50%" }}
                />
            </div>
            <About />
        </div>
    );
}
