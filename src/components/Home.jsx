import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">

      <div className="text-center">

        <h1 className="display-4 fw-bold">
          Automobile Management System
        </h1>

        <p className="lead mt-3">
          Manage automobile records efficiently.
        </p>

        <div className="mt-4">

          <Link to="/add-car" className="btn btn-primary me-3">
            Add Car
          </Link>

          <Link to="/view-cars" className="btn btn-success">
            View Cars
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Home;