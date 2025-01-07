import { useState } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import Modal from "../modal/Modal.jsx";
import poert1 from "../../assets/images/poert1.png";
import port2 from "../../assets/images/port2.png";
import port3 from "../../assets/images/port3.png";
export default function Portfolio() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const portfolioItems = [poert1, port2, port3, poert1, port2, port3];

  return (
    <>
      <Navbar />
      <main>
        <div className="mt-[92px] min-h-[calc(-112px+100vh)]">
          <div className="mb-5">
            <div className="pt-6 text-center text-[#2c3e50]">
              <h2 className="uppercase mb-4 text-fs-1 font-bold">Portfolio</h2>
              <div className="flex items-center justify-center mb-4">
                <div className="h-1 w-20 bg-[rgb(44,62,80)] mr-3"></div>
                <i className="fas fa-star text-[rgb(44,62,80)]"></i>
                <div className="h-1 w-20 bg-[rgb(44,62,80)] ml-3"></div>
              </div>
            </div>

            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {portfolioItems.map((image, index) => (
                  <div key={index} className="relative group">
                    <img className="w-full rounded-lg" src={image} alt={`Portfolio ${index + 1}`} />
                    <div className="absolute inset-0 flex justify-center items-center bg-[#1abc9ce6] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                      <button className="text-white" onClick={() => openModal(image)}>
                        <i className="fa-solid fa-plus text-fs-6"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {selectedImage && <img className="rounded-lg w-[600px]" src={selectedImage} alt="Selected portfolio item" />}
        </Modal>
      </main>
      <Footer />
    </>
  );
}
