import React from "react";
import AppRoutes from "./Routes/Approutes";
import { UserProvider } from "./context/user.context";
import 'remixicon/fonts/remixicon.css'

const App = () => {
  return (
    <>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </>
  );
};

export default App;
