import React from "react";

export default function Button(props) {
    return (
        <div>
            <button
                onClick={
                    props.children === "+"
                        ? props.addAge
                        : props.children === "-"
                        ? props.minusAge
                        : props.changeName
                }
            >
                {props.children}
            </button>
        </div>
    );
}
