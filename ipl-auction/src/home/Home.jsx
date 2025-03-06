import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='text-2xl text-sky-500'>
            Home page IPL Auction
            <div className='flex items-center justify-center space-x-4'>
                <Link className='bg-sky-500 to-blue-400 text-white px-4 py-2 rounded-lg' to={'/auction'}>To Auction Page</Link>
                <Link className='bg-sky-500 to-blue-400 text-white px-4 py-2 rounded-lg' to={'/admin'}>To Admin Page</Link>
            </div>
        </div>
    );
};

export default Home;
