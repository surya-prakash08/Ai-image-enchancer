import Home from "./components/Home";
import Watermark from "./components/Watermark";
const App = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4 ">

            <Watermark/>
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-gray-800 mb-2">
                    AI Image Enhancer{" "}
                </h1>
                <p className="text-lg text-gray-500">
                    Upload your Image and let AI enhance to in seconds!
                </p>
            </div>

            <Home />

            <div className="text-sm text-gray-500 mt-6">
               Made with ❤️ by Surya Prakash with the help of SheriyansAi
            </div>
        </div>
    );
};

export default App;
