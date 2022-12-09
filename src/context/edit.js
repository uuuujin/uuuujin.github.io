import React, {createContext, useState} from "react";

const UserContext = createContext({ username: 'unknown', hellCount: 0});
const SetUserContext = createContext( () => {});

export default function Edit() {
    const [user, setUser] = useState( {username: 'mike', hellCount: 0});

    return (
        <div>
            <SetUserContext.Provider value={setUser}>
                <UserContext.Provider value={user}>
                    <Profile/>
                </UserContext.Provider>
            </SetUserContext.Provider>
        </div>
    )
}


