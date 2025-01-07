import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import logoSrc from "../../assets/avataaars.svg";
export default function Hero() {
  return (
    <>
      <Navbar />
      <main className=" bg-custom-teal mt-[92px] min-h-[calc(100vh_-_112px)]">
        <section className="container text-white min-h-[inherit] flex justify-center flex-col  items-center">
          <img className="w-[250px] mb-4" src={logoSrc} alt="Hero" />
          <div className="text-center pt-6 ">
            <h2 className="uppercase mb-4 text-fs-1 font-bold">start Framework</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-20 bg-white mr-3 "></div>
              <i className="fas fa-star text-white"></i>
              <div className="h-1 w-20 bg-white ml-3 "></div>
            </div>
          </div>
          <div>Graphic Artist - Web Designer - Illustrator</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
