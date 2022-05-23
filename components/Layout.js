import { AppContainer } from "/styles/AppContainer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <AppContainer>
      <Navbar />
      {children}
    </AppContainer>
  );
}

export default Layout;
