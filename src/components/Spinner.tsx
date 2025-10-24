const Spinner = () => {
    return (
        <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-20">
            <div className="w-12 h-12 border-8 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
        </div>
    );
};

export default Spinner;
