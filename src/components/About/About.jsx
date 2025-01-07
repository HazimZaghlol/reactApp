import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
export default function About() {
  return (
    <>
      <Navbar />
      <main className=" bg-custom-teal mt-[86px] min-h-[calc(100vh_-_106px)]">
        <section className="container text-white min-h-[inherit] flex justify-center flex-col">
          <div className="text-center pt-4 ">
            <h2 className="uppercase mb-4 text-fs-1 font-bold">about component</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-20 bg-white mr-3 "></div>
              <i className="fas fa-star text-white"></i>
              <div className="h-1 w-20 bg-white ml-3 "></div>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-wrap px-5">
              <div className="w-full md:w-1/2 md:pl-12 md:pr-3">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>

              <div className="w-full md:w-1/2 md:pr-12 md:pl-3">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
