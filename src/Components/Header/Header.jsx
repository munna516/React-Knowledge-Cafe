import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <div className="flex justify-between items-center border-b-2 p-4 mx-4">
            <h1 className='text-5xl'>Knowledge-Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;