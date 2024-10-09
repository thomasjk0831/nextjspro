import Link from 'next/link';

const MainPage = () => {
    return <div className='text-2xl'>Page
    <Link href='/properties'>Go to properties</Link>
    </div>;
}
 
export default MainPage;