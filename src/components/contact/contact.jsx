import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="mt-24 min-h-[calc(-112px+100vh)]">
        <div className="mb-6">
          <div className="pt-4">
            <div className="text-center pt-6 text-[#2c3e50]">
              <h2 className="uppercase mb-4 text-fs-1 font-bold">conatct section</h2>
              <div className="flex items-center justify-center mb-4">
                <div className="h-1 w-20 bg-[rgb(44,62,80)] mr-3 "></div>
                <i className="fas fa-star text-[rgb(44,62,80)]"></i>
                <div className="h-1 w-20 bg-[rgb(44,62,80)] ml-3 "></div>
              </div>
            </div>

            <form className="w-1/2 p-4 mx-auto mt-12">
              <input id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-b  border-[#dee2e6] py-4 w-full mb-5 focus:ring-0 focus:shadow-none" />

              <input id="userAge" type="text" placeholder="userAge" name="userAge" className="form-control border-0 border-b  border-[#dee2e6]  py-4 w-full mb-5 focus:ring-0 focus:shadow-none" />

              <input id="userEmail" type="text" placeholder="userEmail" name="userEmail" className="form-control border-0 border-b  border-[#dee2e6] py-4 w-full mb-5 focus:ring-0 focus:shadow-none" />

              <input
                id="userPassword"
                type="text"
                placeholder="userPassword"
                name="userPassword"
                className="form-control border-0  border-[#dee2e6] border-b py-4 w-full mb-5 focus:ring-0 focus:shadow-none"
              />

              <button className="btn mt-6 text-white bg-[#1abc9c] px-3 py-1.5 rounded-lg">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
