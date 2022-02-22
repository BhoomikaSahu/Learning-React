import { Link, Outlet } from "react-router-dom";

const Home = () => {
    return(
        <>
            <h1>I am Home page</h1>
            <Link to='/home/about' > About </Link>
            <Link to='/home/courses' > Courses </Link>
            <Link to='/home/contact' > Contact </Link>
            <Outlet />
        </>
    );
}

export default Home;
