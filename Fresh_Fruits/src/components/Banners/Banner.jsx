import BannerPng from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeUp, FadeLeft } from "../../utility/animation";

const Banner = () => {
  return (
    <section className=" bg-secondary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/*Banner Image */}

        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            viewport={{ once: true }}
            src={BannerPng}
            className=" w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>
        {/* Brand Info */}
        <div className=" flex flex-col justify-center">
          <div className=" text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className=" text-3xl lg:text-6xl font-bold uppercase"
            >
              {" "}
              Brand Info
            </motion.h1>

            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              facere voluptate laboriosam optio neque odit obcaecati
              perspiciatis suscipit impedit sed. Voluptatibus iste molestias at
              maiores odit corporis assumenda voluptates laudantium.
            </motion.p>

            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates adipisci commodi animi distinctio eligendi nemo
              inventore. Quasi, ipsum! Quam dolorum eaque neque qui hic a
              veniam, atque alias amet sit!
            </motion.p>

            <motion.p
              variants={FadeUp(1.1)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              omnis dolorem, excepturi ratione nostrum et modi facere ducimus
              tenetur odit architecto officia, repellat optio. Explicabo nam
              aperiam distinctio excepturi quo?
            </motion.p>

            {/* button section */}
            <motion.div
              variants={FadeUp(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className=" primary-btn">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
