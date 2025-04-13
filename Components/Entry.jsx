'use client';
import Link from "next/link";
import EndSession from "@/app/serActions/EndSession";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

const Entry = () => {


  const route = useRouter();
      const {isAuthenticated, setIsAuthenticated} = useAuth(null);
     
   
     const logoutLogic = async () =>{
      const { success, error } = await EndSession();
      if(success)
      {      setIsAuthenticated(false);
  
        route.push('/login');
      }
      else{
  toast.error(error);
      }
     }


    return (
      <>
       {!isAuthenticated && ( 
        <>
        <div
          className="relative min-h-[500px] rounded-2xl bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(44, 56, 85, 0.9), rgba(100, 125, 187, 0.1))",
          }}
        >
          <div className="max-w-[1200px] mx-auto p-8">
            <div className="text-white max-w-xl pt-20 px-4">
              <h1 className="text-4xl font-bold leading-tight mb-4" style={{ color: "white" }}>
                Your Meeting Spot, Just a Click Away!
              </h1>
              <p className="text-base" style={{ color: "white" }}>
                Book Meeting Rooms along with Required Amenities at a glance.
              </p>
            </div>
          </div>
  
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-[calc(100%-6rem)] flex items-center gap-4 p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-xl">
            <form className="grid grid-cols-4 gap-4 w-full">
              <div className="col-span-4">
                <nav className="max-w-[1200px] mx-auto p-4 flex justify-between items-center">
                  <div className="text-4xl font-bold" style={{ color: "#1F313B" }}>
                    SpotUrSpace
                  </div>
                </nav>
              </div>
            </form>
          </div>
        </div>
  
        <section className="bg-[#d4e2e3] mt-10">
          <div className="max-w-[1200px] mx-auto py-20 px-4">
            <h2 className="text-2xl font-bold text-center" style={{ color: "#1F313B" }}>
              What our clients say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  img: "/M1.jpeg",
                  text: `"The space was perfect for our brainstorming session! Great amenities and a quiet atmosphere." – Rohit Sharma, Marketing Manager, ZYC COORPORATES`,
                },
                {
                  img: "/M2.jpeg",
                  text: `"Booked a meeting room for my team, and the experience was flawless. Great WiFi, comfortable chairs, and a quiet ambiance. Highly recommended!" – Rajesh Verma, Product Manager, TRIVIANA`,
                },
                {
                  img: "/M3.jpeg",
                  text: `"Loved the seamless booking experience. The room was well-lit and comfortable!" – Ananya Mehta, Freelancer, EXIGO`,
                },
              ].map((client, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-xl shadow-xl text-center"
                >
                  <img
                    src={client.img}
                    alt="client"
                    className="w-20 mx-auto mb-4 rounded-full"
                  />
                  <p className="text-sm" style={{ color: "#4B5563" }}>
                    {client.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        <section className="max-w-[1200px] mx-auto px-4 py-12">
          <div className="p-8 text-center rounded-2xl shadow-2xl">
            <p className="mb-4 font-semibold" style={{ color: "#335263" }}>
              Seamless Booking for Productive Meetings!
            </p>
            <h4 className="max-w-lg mx-auto mb-4 text-2xl font-bold" style={{ color: "#1F313B" }}>
              Join our hassle-free bookings system !!
            </h4>
            <Link
            href={`/register`}
            className="bg-blue-600 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-900"
            >Join
            </Link>
          </div>
        </section>
        </> 
       )}
      </>
 
  )
  };
  
  export default Entry;
  