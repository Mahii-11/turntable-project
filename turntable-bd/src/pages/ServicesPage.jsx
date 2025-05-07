import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/cards";
import { Separators } from "../components/ui/separators";
import { CheckCircle, Settings, Drill, Paintbrush } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="ClassicVinyl Services - Expert turntable repair, restoration, and upgrades."
        />
        <meta name="author" content="ClassicVinyl" />
        <meta property="og:title" content="ClassicVinyl Services" />
        <meta
          property="og:description"
          content="Expert turntable repair, restoration, and upgrade services to keep your vinyl sounding its best."
        />
        <meta property="og:image" content="/images/your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ClassicVinyl Services" />
        <meta
          name="twitter:description"
          content="Keep your vinyl in perfect condition with our expert turntable services."
        />
        <meta name="twitter:image" content="/images/your-image.jpg" />
        <title>The Turntable Shop Services - BD</title>
      </Helmet>

      <div className="bg-[#222222] -mt-8">
        {/* Hero Section */}
        <section className="relative py-16 bg-[#121212] text-white overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Our Services
              </h1>
              <p className="text-lg max-w-2xl text-gray-300">
                Expert turntable repair, restoration, and upgrade services to
                keep your vinyl sounding its best.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF37] to-transparent opacity-15"
          />
        </section>

        {/* Introduction */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="md:w-1/2"
              >
                <h2 className="font-serif text-3xl font-bold text-[#D4AF37] mb-4">
                  Bringing Your Vintage Equipment Back to Life
                </h2>
                <p className="text-gray-300 mb-4">
                  At ClassicVinyl, we specialize in the complete restoration and
                  servicing of vintage turntables and audio equipment. Our
                  expert technicians combine modern technical knowledge with a
                  deep appreciation for classic audio engineering to deliver
                  exceptional results.
                </p>
                <p className="text-gray-300">
                  Whether your cherished turntable needs a simple tune-up or
                  complete overhaul, our specialized services will have your
                  equipment performing at its best, preserving both its sound
                  quality and historical value.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="md:w-1/2"
              >
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  src="/images/download (1).jpeg"
                  alt="Vintage turntable"
                  className="rounded-lg shadow-md w-92 h-92"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-12 bg-[#1A1A1A]">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-3xl font-bold text-[#D4AF37] mb-8 text-center"
            >
              Our Specialized Services
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Accessories & Upgrades */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="bg-[#2A2A2A] shadow-lg border-0 h-full">
                  <CardHeader className="pb-2">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.3,
                      }}
                      className="w-12 h-12 rounded-full bg-[#D4AF37] bg-opacity-20 flex items-center justify-center mb-4"
                    >
                      <CheckCircle className="h-6 w-6 text-[#161205]" />
                    </motion.div>
                    <CardTitle className="font-serif text-xl text-[#D4AF37]">
                      Accessories & Upgrades
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Enhance your listening experience with our premium
                      selection of accessories and performance upgrades,
                      carefully chosen to complement your equipment.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Mechanical & Electronics Servicing */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="bg-[#2A2A2A] shadow-lg border-0 h-full">
                  <CardHeader className="pb-2">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.4,
                      }}
                      className="w-12 h-12 rounded-full bg-[#D4AF37] bg-opacity-20 flex items-center justify-center mb-4"
                    >
                      <Settings className="h-6 w-6 text-[#030302]" />
                    </motion.div>
                    <CardTitle className="font-serif text-xl text-[#D4AF37]">
                      Mechanical & Electronics Servicing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Expert technical service for all mechanical components and
                      electronic systems, ensuring optimal performance and
                      reliability.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cosmetic Restorations */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="bg-[#2A2A2A] shadow-lg border-0 h-full">
                  <CardHeader className="pb-2">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.5,
                      }}
                      className="w-12 h-12 rounded-full bg-[#D4AF37] bg-opacity-20 flex items-center justify-center mb-4"
                    >
                      <Paintbrush className="h-6 w-6 text-[#080600]" />
                    </motion.div>
                    <CardTitle className="font-serif text-xl text-[#D4AF37]">
                      Cosmetic Restorations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Restore the original beauty of your vintage equipment with
                      our meticulous cosmetic restoration services.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-12 bg-[#222222]">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-[#D4AF37] mb-8 text-center">
              Detailed Service Offerings
            </h2>

            {/* Accessories & Upgrades */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-[#D4AF37] mr-2" />
                <h3 className="font-serif text-2xl font-semibold text-[#D4AF37]">
                  Accessories & Upgrades
                </h3>
              </div>
              <Separators className="mb-6 bg-gray-700" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-3 text-lg text-gray-200">
                    Premium Components
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Stylus replacements for all major brands</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Cartridge upgrades and calibration</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>High-quality belt replacements</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Cork and rubber mat upgrades</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 text-lg text-gray-200">
                    Performance Enhancements
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Tonearm wire upgrade and rewiring</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Vibration isolation solutions</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Custom dust covers</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Vintage-appropriate audio cables</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/*   <div className="mt-6">
              <img
                src="images/turntable.jpg"
                alt="Turntable accessories"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div> */}
            </div>

            {/* Mechanical & Electronics Servicing  */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Settings className="h-6 w-6 text-[#D4AF37] mr-2" />
                <h3 className="font-serif text-2xl font-semibold text-[#D4AF37]">
                  Mechanical & Electronics Servicing
                </h3>
              </div>
              <Separators className="mb-6 bg-gray-700" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-3 text-lg text-gray-200">
                    Mechanical Repairs
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Motor service and rebuild</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Bearing lubrication and replacement</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Tonearm bearing service</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Suspension system restoration</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 text-lg text-gray-200">
                    Electronic Repairs
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Capacitor replacement and circuit restoration</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Power supply refurbishment</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Speed control calibration</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Wiring harness repair and replacement</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className="mt-6">
              <img
                src="/images/turntableRepair.jpg"
                alt="Turntable repair"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div> */}
            </div>

            {/*Cosmetic Restorations  */}
            <div>
              <div className="flex items-center mb-4">
                <Paintbrush className="h-6 w-6 text-[#D4AF37] mr-2" />
                <h3 className="font-serif text-2xl font-semibold text-[#D4AF37]">
                  Cosmetic Restorations
                </h3>
              </div>
              <Separators className="mb-6 bg-gray-700" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-3 text-lg text-gray-200">
                    Exterior Refinishing
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Wood veneer repair and refinishing</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Metal plating restoration</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Vintage-appropriate paint matching</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Dust cover polishing and scratch removal</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 text-lg text-gray-200">
                    Detail Work
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Badge and emblem restoration</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Control knob refurbishment</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>Front panel and faceplate cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <Drill className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                      <span>LED/indicator light modernization</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/*   <div className="mt-6">
              <img
                src="/images/Restore.jpg"
                alt="Restored vintage turntable"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div> */}
            </div>
          </div>
        </section>

        {/* Warranty Information */}
        <section className="py-12 bg-[#1A1A1A]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-[#2A2A2A] rounded-lg shadow-md p-8 border border-gray-700">
              <h2 className="font-serif text-2xl font-bold text-[#D4AF37] mb-4 text-center">
                Our Service Warranty
              </h2>
              <p className="text-gray-300 mb-4">
                All of our repair and restoration services come with a
                comprehensive warranty to ensure your complete satisfaction:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-[#D4AF37]">90-day warranty</strong>{" "}
                    on all repair work and parts
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-[#D4AF37]">180-day warranty</strong>{" "}
                    on complete system restorations
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Free follow-up calibration within 30 days of service
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Complimentary consultation for any issues related to our
                    service
                  </span>
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                Our commitment to quality ensures that your vintage audio
                equipment will continue to perform beautifully for years to
                come.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
