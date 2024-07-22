import tirupatiImage from "../assets/tirupati-andhra.jpg";
import tawangImage from "../assets/tawang-ap.jpg";
import kamakhyaImage from "../assets/kamakhya-assam.jpg";
import bodhyGayaImage from "../assets/bodhgaya-bihar.jpg";
import chitrakoteImage from "../assets/chitrakote-chattisgarh.jpg";
import panajiImage from "../assets/panaji-goa.jpg";
import sabarmatiImage from "../assets/sabarmati-gujarat.jpg";
import brahmaImage from "../assets/brahma-haryana.jpg";
import shimlaImage from "../assets/shimla-hp.jpg";
import dassamImage from "../assets/dassam-jharkand.jpg";
import mysorePalaceImage from "../assets/mysorepalace-karnataka.jpg";
import alleppeyImage from "../assets/alleppey-kerala.jpg";
import khajurahoImage from "../assets/khajuraho-mp.jpg";
import goiImage from "../assets/goi-maharashtra.jpg";
import lokatkImage from "../assets/loktak-manipur.jpg";
import meghalayaImage from "../assets/meghalaya.jpg";
import durtlangImage from "../assets/durtlang-mizoram.jpg";
import kisamaImage from "../assets/kisama-nagaland.jpg";
import puriImage from "../assets/puri-odisha.jpg";
import goldentempleImage from "../assets/goldentemple-punjab.jpg";
import hawamahalImage from "../assets/hawamahal-rajasthan.jpg";
import tsomgoImage from "../assets/tsomgo-sikkim.jpg";
import marinaImage from "../assets/marina-chennai.jpg";
import charminarImage from "../assets/charminar-telangana.jpg";
import ujjayantaImage from "../assets/ujjayanta-tripura.jpg";
import tajmahalImage from "../assets/tajmahal-up.jpg";
import rishikeshImage from "../assets/rishikesh-uttarakhand.jpg";
import victoriaImage from "../assets/victoria-wb.jpg";

function HomePage() {
  return (
    <div className="bg-black max-h-screen">
      <p className=" text-orange-300 flex justify-center text-6xl">Jana Seva</p>
      <p className="text-white flex justify-center mt-2 text-2xl">
        Instant Help
        <span className="mx-1 text-blue-500">for</span>
        <span className="text-green-400"> Every Emergency! </span>
      </p>

      <div className=" relative grid sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-6 h-60 px-3 ">
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={tirupatiImage}
            alt="tirupati"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Andhra Pradesh
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60 ">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={tawangImage}
            alt="tawang"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Arunachal Pradesh
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={kamakhyaImage}
            alt="kamakhya"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Assam
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={bodhyGayaImage}
            alt="tawang"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Bihar
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={chitrakoteImage}
            alt="chitakote"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Chattisgarh
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={panajiImage}
            alt="panaji"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Goa
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={sabarmatiImage}
            alt="sabarmati"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Gujarat
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={brahmaImage}
            alt="brahma"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Haryana
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={shimlaImage}
            alt="shimla"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Himachal Pradesh
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={dassamImage}
            alt="dassam"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Jharkand
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={mysorePalaceImage}
            alt="mysorepalace"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Karnataka
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={alleppeyImage}
            alt="alleppey"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Kerala
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={khajurahoImage}
            alt="khajuraho"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Madhya Pradesh
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={goiImage}
            alt="goi"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Maharashthra
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={lokatkImage}
            alt="loktak"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Manipur
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={meghalayaImage}
            alt="meghalaya"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Meghalaya
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={durtlangImage}
            alt="durtlang"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Mizoram
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={kisamaImage}
            alt="kisama"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Nagaland
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={puriImage}
            alt="puri"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Odisha
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={goldentempleImage}
            alt="goldentemple"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Punjab
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={hawamahalImage}
            alt="hawamahal"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Rajasthan
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={tsomgoImage}
            alt="tsomgo"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Sikkim
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={marinaImage}
            alt="marina"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Tamil Nadu
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={charminarImage}
            alt="charminar"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Telangana
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={ujjayantaImage}
            alt="ujjayanta"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Tripura
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={tajmahalImage}
            alt="tajmahal"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Uttar Pradesh
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={rishikeshImage}
            alt="rishikesh"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            Uttarakhand
          </h3>
        </div>
        <div className="bg-white rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-105 h-60">
          <img
            className="w-full rounded-[20px] text-center text-black transform transition duration-300 ease-in-out hover:scale-101 h-60 object-cover"
            src={victoriaImage}
            alt="victoria"
          />
          <h3 className="absolute top-0 left-0 bottom-0 right-0 text-white">
            West Bengal
          </h3>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
