import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-secondary text-center mb-4">
          Oops!
        </h1>
        <p className="text-center text-2xl">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-center text-2xl">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
