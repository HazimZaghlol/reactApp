export default function Footer() {
  return (
    <footer>
      <div className="bg-[#2c3e50] text-white justify-center text-center p-10 m-0">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 m-6">
          <div className="text-center p-4 rounded-lg ">
            <h3 className="text-base xl:text-[1.75rem] pt-5 mt-0 mb-2.5 font-medium leading-tight">LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="text-center p-4 rounded-lg ">
            <h3 className="text-base xl:text-[1.75rem] pt-5 mt-0 mb-2.5 font-medium leading-tight">AROUND THE WEB</h3>
            <div className="flex justify-center ">
              <i className="fa-brands fa-facebook text-2xl icon"></i>
              <i className="fa-brands fa-twitter text-2xl icon"></i>
              <i className="fa-brands fa-linkedin-in text-2xl icon"></i>
              <i className="fa-solid fa-globe text-2xl icon"></i>
            </div>
          </div>

          <div className="text-center p-4 rounded-lg ">
            <h3 className="text-base xl:text-[1.75rem] pt-5 mt-0 mb-2.5 font-medium leading-tight">ABOUT FREELANCER</h3>
            <p>Freelance is a free-to-use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
      <div className="bg-[#1a252f] text-center text-sm text-[#f0f8ff] p-2.5">
        <p className="pt-2.5">Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
