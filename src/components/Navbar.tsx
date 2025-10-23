import Button from "./Button";

const Navbar = () => {
    const handleSomethingClick = () => {
        console.log("SOMETHING button clicked");
    };

    const handleLoginClick = () => {
        console.log("LOGIN button clicked");
    };

    return (
        <nav className="w-screen bg-blue-200 p-2">
            <div className="flex justify-between">
                <Button onClick={handleSomethingClick}>SOMETHING</Button>
                <Button onClick={handleLoginClick}>LOGIN</Button>
            </div>
        </nav>
    );
};

export default Navbar;
