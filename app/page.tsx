import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ShareButton from "./components/sharebutton/ShareButton";
import { FaSquarePinterest } from "react-icons/fa6";
import PublisherCard from "./components/publisherCard/PublisherCard";
import Footer from "./components/footer/Footer";

export default function Home() {

  return (
    <div className="min-h-screen relative w-full flex flex-col  items-center">

     <div className="bg-orange-900 inline-block p-10 space-y-4 text-white">

        {/* short desc */}
        <h3 className="text-center">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}</h3>

        {/* share buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <p>Share on:</p>
          <ShareButton
            key={1}
            icon={<FaFacebook />}
            title="Facebook"
            color="bg-blue-600"
          />
          <ShareButton
            key={2}
            icon={<FaTwitter />}
            title="Twitter"
            color="bg-red-600"
          />
          <ShareButton
            key={3}
            icon={<FaSquarePinterest />}
            title="Pinterest"
            color="bg-pink-600"
          />
          <ShareButton
            key={4}
            icon={<FaWhatsapp />}
            title="WhatsApp"
            color="bg-green-600"
          />



        </div>

        {/* publisher */}
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 space-x-0 md:space-x-4 md:space-y-0  justify-center">
        <PublisherCard name="jayanto choudhury" designation="Publisher" follower="200K" article="500"/>
        <PublisherCard name="Nilanjona Trowie" designation="Publisher" follower="90M" article="5341"/>

        </div>

      </div>

     

      {/* end */}

      {/* footer import from components/footer */}
    
       <div className="absolute bottom-0 w-full">
        <Footer />
       </div>
      

    </div>
  );
}
