import FAQSection from "./FAQSection";
import Featured from "./Featured";
import Footer from "./Footer";
import Header from "./Header";
import TestimonialSection from "./TestimonialSection";
function Home() {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div
          className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white p-6"
          style={{ backgroundImage: `url("/images/record-1.jpg")` }}
        >
          <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-300">
              Spin the Rhythm 🎶
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Experience the raw magic of vinyl. Classic sound, modern passion.
              Let's vibe with every beat, every spin.
            </p>
            <button
              className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition duration-300 cursor-pointer"
              onClick={() => {
                const el = document.getElementById("products");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Explore Collection
            </button>
          </div>
        </div>
      </div>
      <section className="py-16 bg-white" id="about">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <img
            src="/images/record-2.jpg"
            alt="Inside the Shop"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-500">
              About Our Shop
            </h2>
            <p className="text-lg leading-relaxed">
              At <span className="font-semibold">Spin The Rhythm</span>, we’re
              more than just a vinyl store — we’re a celebration of analog music
              and timeless sound. Whether you're a seasoned collector or a new
              vinyl enthusiast, our curated selection of records and turntables
              will take you on a nostalgic journey through musical history.
            </p>
            <p className="mt-4 text-lg">
              Located in the heart of the city, our shop is a cozy space filled
              with good vibes, passionate music lovers, and iconic records from
              every era.
            </p>
          </div>
        </div>
      </section>
      <Featured />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default Home;
