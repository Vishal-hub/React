import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User",
    setUsername: () => {},
});

export default UserContext;