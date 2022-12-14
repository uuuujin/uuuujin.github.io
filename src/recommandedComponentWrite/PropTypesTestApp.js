import React from "react";
import User from "./PropTypesTest";

export default function PropTypesTestApp() {
    return (
        <div>
            <User onChangeTitle={() => {}} male={true} type={'gold'} age={12}/>
        </div>
    )
}