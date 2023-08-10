const Container = ({children}) => {
    return (
        <div className="max-w-[2520px] bg-gradient-to-r from-purple-500 to-pink-500">
            {children}
        </div>
    );
};

export default Container;