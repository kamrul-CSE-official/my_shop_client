import { RouterProvider } from "react-router-dom";
import router from "./routers/mainRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  try {
    return (
      <>
        <RouterProvider router={router} />
        <Toaster />
      </>
    );
  } catch (error) {
    return (
      <>
        <h2>Something went wrong!</h2>
        <button onClick={() => window.location.reload()}>Try again</button>
      </>
    );
  }
}

export default App;
