import * as React from "react";
import { LocationCard } from "./LocationCard";
import { VerificationInput } from "./VerificationInput";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

export const LayoutCards: React.FC = () => {
  const [verificationCode, setVerificationCode] = React.useState("");
  const [countdown, setCountdown] = React.useState(99); // Start countdown at 99 seconds
  const [isCounting, setIsCounting] = React.useState(false); // State to manage counting
  const navigate = useNavigate(); // Initialize useNavigate

  const locations = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b503d3e8ff8b60bdd0061f4e6b7b8a88ff8ae0cff9cc23337b56491e9a6f0701?placeholderIfAbsent=true&apiKey=e5d1d5a004684dad8cab9f5bdd4cd73c",
      city: "Singapore",
      type: "Head Office",
      company: "XYZ Pvt. Ltd.",
      address: "Road to nowhere, 06-404, 500 Internal Error"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e65a39452e561544cf72139127a80ebc62090aa4f1eac9e0cde36bcc85f59f78?placeholderIfAbsent=true&apiKey=e5d1d5a004684dad8cab9f5bdd4cd73c",
      city: "Hong Kong",
      type: "Branches",
      company: "XYZ Pte. Ltd.",
      address: "The Infinite Loop Office, 404 Timeout Plaza"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb1a9dde8fa87bd17220f309f188ee239d6c82170b14afd121c7b06e42044d2d?placeholderIfAbsent=true&apiKey=e5d1d5a004684dad8cab9f5bdd4cd73c",
      city: "USA",
      type: "Branches",
      company: "XYZ Pte. Ltd.",
      address: "The Infinite Loop Office, 404 Timeout Plaza"
    }
  ];

  // Effect for countdown timer
  React.useEffect(() => {
    if (isCounting && countdown > 0) {
      const timerId = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timerId); // Clean up the interval on unmount
    }
    
    if (countdown === 0) {
      setIsCounting(false); // Stop counting when it reaches zero
    }
  }, [isCounting, countdown]);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Verification Code:", verificationCode); // For debugging
    navigate("/form"); // Navigate to business form on successful verification
  };

  const handleRequestNewCode = () => {
    if (!isCounting) {
      setCountdown(99); // Reset countdown to 99 seconds
      setIsCounting(true); // Start counting down
    }
  };

  return (
    <div className="overflow-hidden pr-20 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        {/* Left Side with Gradient Background */}
        <div 
          className="flex flex-col w-[65%] max-md:w-full" 
          style={{
            background: 'linear-gradient(to bottom, #3F1BBC, #BF19E6, #FDAA35)',
            borderRadius: '20px', // Adjust radius as needed
            position: 'relative'
          }}
        >
          <div 
            style={{
              position: 'absolute',
              top: '-50px', // Adjust based on layout
              left: '0',
              right: '0',
              background: 'linear-gradient(to bottom, #3F1BBC, #9513B4, #E38602)',
              height: '50px', // Adjust height as needed
              borderRadius: '20px'
            }}
          ></div>

          <div className="flex flex-col items-center px-14 pt-12 pb-48 mx-auto w-full bg-stone-500 max-md:px-5 max-md:pb-24 max-md:mt-10">
            <button className="flex gap-1 items-center self-start text-sm whitespace-nowrap text-neutral-200" onClick={handleRequestNewCode}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/22b9c1281219e3469b3f60e269de693f85fefa8c23c5a5824526b87f613d3ae6?placeholderIfAbsent=true&apiKey=e5d1d5a004684dad8cab9f5bdd4cd73c"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              />
              <span className="self-stretch my-auto">Back</span>
            </button>
            
            <h1 className="mt-28 text-3xl font-semibold leading-none text-center text-stone-50 max-md:mt-10">
              Office Locations
            </h1>

            {/* Display location cards */}
            <div className="grid grid-cols-1 gap-6 mt-14 max-md:grid-cols-1">
              {locations.map((location, index) => (
                <LocationCard key={index} {...location} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Verification Section */}
        <div className="flex flex-col ml-5 w-[35%] max-md:w-full">
          <div className="flex flex-col mt-24 max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/84e34fced613b5a5e8f616974c56f80e6b69d696ece94e306868e7c80f6bc40a?placeholderIfAbsent=true&apiKey=e5d1d5a004684dad8cab9f5bdd4cd73c"
              alt=""
              className="object-contain max-w-full aspect-[5.05] w-[202px]"
            />
            
            <div className="flex flex-col mt-24 max-md:mt-10">
              <h2 className="text-3xl font-bold leading-none text-neutral-800">
                Verify your Email
              </h2>
              <p className="mt-2 text-base text-stone-500">
                Please enter the 6-digit code we just sent to your email.
              </p>
              
              {/* Verification Form */}
              <form onSubmit={handleVerify} className="flex flex-col mt-12 w-full">
                <VerificationInput 
                  value={verificationCode}
                  onChange={setVerificationCode}
                />
                
                <button type="submit" 
                    className="mt-6 p-3.5 w-full leading-none text-white bg-red-600 rounded-xl">
                    Verify
                </button>
                
                {isCounting ? (
                  <p className="mt-4 text-stone-500">Wait {Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, '0')} seconds before requesting a new code.</p>
                ) : (
                  <button type="button" onClick={handleRequestNewCode} className="mt-4 text-blue-500 underline">Request new code</button>
                )}
              </form>
            </div>

            {/* Terms and Conditions */}
            <p className="mt-[96px] mr-3 ml-3 text-sm leading-5 text-center text-stone-500 max-md:max-w-full">
              By continuing, you're agreeing to Nobody's{" "}
              <a href="#" className="text-sky-500">Terms of Service</a>,{" "}
              <a href="#" className="text-sky-500">Privacy Policy</a>, and{" "}
              <a href="#" className="text-sky-500">Cookie Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};