import React from "react";

import "./Photo.scss";
import Top from "./Top/Top"
import Middle from "./Middle/Middle"
import Bottom from "./Bottom/Bottom"

export default function Photo() {
    return (
        <div className="photoArea">
            <Top/>
            <Middle/>
            <Bottom/>
        </div>
    )
}