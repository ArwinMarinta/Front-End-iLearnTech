import CardKategori from "../../components/card/CardKategori";
import CardCourse from "../../components/card/CardPopular";
import PeopleHome from "../../assets/home.svg";
import Carousel from "react-multi-carousel";
import Whatsapp from "../../assets/whattsap.svg";
import Personal from "../../assets/persone.svg";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../utils/responsiveCarousel";
import { responsive2 } from "../../utils/responsiveCarousel";
import "../../utils/CssConfig.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  getCoursePromo,
  getPopular,
} from "../../redux/actions/CourseActions";
import { useEffect, useState } from "react";
import CourseIcon from "../../assets/course.svg";
import Footer from "../../components/Navbar/Footers";

const HomePage = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { category, popular, coursePromo } = useSelector(
    (state) => state.course
  );

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getPopular());
    dispatch(getCoursePromo());
    setSelectedCategory("All");
  }, [dispatch]);

  const filterCourses = (category) => {
    if (!Array.isArray(popular)) {
      return [];
    }

    if (category === "All") {
      return popular;
    } else {
      return popular.filter((course) => course.category === category);
    }
  };

  return (
    <>
      <div className="mx-auto">
        {/* bagian 1 di homepage */}
        <div className="mx-auto flex flex-col lg:flex-row container ">
          <div className="lg:w-[60%]  py-14 flex flex-col w-full  gap-4 ">
            <div className=" font-bold text-4xl text-BLUE05 font-Montserrat">
              Mulai Petualangan Pemrograman Anda disini!
            </div>
            <div className=" font-Montserrat text-sm max-w-lg">
              Jelajahi kemungkinan baru dengan situs pemrograman kami yang baru!
              Temukan keasyikan belajar kode melalui pengalaman interaktif yang
              kami tawarkan. Bergabunglah sekarang untuk meraih potensi penuh
              Anda dalam dunia pemrograman
            </div>
            <div className="flex flex-row  gap-3">
              <Link
                to="/course"
                className="border-2 text-YELLOW05 py-1 px-2 font-bold border-YELLOW05 rounded-[4px] flex flex-row items-center gap-1"
              >
                <img src={Personal} />
                Gabung Program
              </Link>
              <Link
                to="https://wa.me/+6282158729742"
                target="_blank"
                alt=""
                className="bg-YELLOW05 font-bold text-white py-1 px-2 rounded-[4px] flex flex-row items-center gap-1"
              >
                <img src={Whatsapp} />
                Tanya CS
              </Link>
            </div>
          </div>
          <div className=" flex   py-4 lg:w-[40%] ">
            <div className="flex flex-col justify-center lg:gap-4 pl-4 lg:pl-0 gap-2 w-full">
              <img src={PeopleHome} />
            </div>
          </div>
        </div>

        {/* Bagian Kategori Belajar */}
        <div className=" flex mx-auto justify-center  bg-WHITE05">
          <div className="flex w-full flex-col pt-[26px] pb-[14px] gap-5 container">
            <div className="flex flex-row justify-between ">
              <div className="flex flex-col">
                <p className="font-bold text-xl text-BLUE05 ">
                  Tentukan Jalur Belajarmu di Sini
                </p>
                <p className="text-xs">
                  Bingung mau mulai dari mana? Ikuti jalur belajar berikut ini
                </p>
              </div>
              <Link
                to="/course"
                className="font-Montserrat font-extrabold text-xs max-w-fit text-DARKBLUE05 self-center"
              >
                Lihat Semua
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-6 justify-between gap-3  w-full ">
              {category.map((data) => (
                // <div key={data.id}>
                // {/* <Link as={Link} to={`/course/category=${data.slug}`}> */}
                <CardKategori key={data.id} data={data} />
                // {/* </Link> */}
                // </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-LightBlue5">
        <div className="mx-auto flex flex-col lg:flex-row container ">
          <div className="lg:w-[60%]  py-14 flex flex-col w-full  gap-4 ">
            <div className=" font-bold text-4xl text-BLUE05 font-Montserrat">
              Bingung Mau Pilih Kelas Apa ?
            </div>
            <div className=" font-Montserrat text-sm max-w-lg">
              Ada beragam kelas gratis yang dapat Anda eksplorasi di sini. Ayo
              manfaatkan kesempatan ini untuk memperluas pengetahuan dan
              keterampilan Anda tanpa biaya.
            </div>
            <div className="flex flex-row  gap-3">
              <Link
                to="/course"
                className="border-2 text-white py-1 px-2 font-semibold bg-BLUE05 rounded-[4px] flex flex-row items-center gap-1"
              >
                Mulai Sekarang
              </Link>
            </div>
          </div>
          <div className=" flex   py-4 lg:w-[40%] ">
            <div className="flex flex-col justify-center lg:gap-4 pl-4 lg:pl-0 gap-2 w-full">
              <img src={CourseIcon} />
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Kursus Populer */}
      <div className="mx-auto flex justify-center ">
        <div className="flex flex-col container gap-5 pt-[26px] ">
          <div className="flex flex-row  font-Montserrat  justify-between">
            <h2 className="font-bold text-xl border-b-[6px] border-YELLOW05 ">
              Kursus Populer
            </h2>
            <Link
              as={Link}
              to="/course/populer"
              className="font-extrabold text-xs text-DARKBLUE05 self-center"
            >
              Lihat Semua
            </Link>
          </div>

          {category.length > 0 && (
            <div className="">
              <Carousel
                responsive={responsive2}
                arrows={false}
              >
                {/* <div className="flex flex-row bg-red-500 items-center "> */}
                <button
                  onClick={() => setSelectedCategory("All")}
                  className=" rounded-2xl w-full font-Montserrat font-bold text-xs bg-LightBlue5 py-2 whitespace-nowrap text-center line-clamp-2 "
                >
                  All
                </button>
                {category.map((datas) => (
                  <div key={datas.id} className="ml-1 mr-1 ">
                    <button
                      onClick={() => setSelectedCategory(datas.name)}
                      className=" rounded-2xl w-full  px-2 font-Montserrat font-bold text-xs bg-LightBlue5 py-2 whitespace-nowrap text-center line-clamp-2 "
                    >
                      <div>{datas.name}</div>
                    </button>
                  </div>
                ))}
                {/* </div> */}
              </Carousel>
            </div>
          )}

          <div className=" drop-shadow-xl ">
            <Carousel responsive={responsive} arrows={false}>
              {filterCourses(selectedCategory).map((data) => (
                <CardCourse key={data.id} data={data} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="mx-auto flex justify-center ">
        <div className="flex flex-col container gap-5 ">
          <div className="flex flex-row  font-Montserrat  justify-between">
            <h2 className="font-bold text-xl border-b-[6px] border-YELLOW05 ">
              Kursus Promo
            </h2>
            <Link
              as={Link}
              to="/course/promo"
              className="font-extrabold text-xs text-DARKBLUE05 self-center"
            >
              Lihat Semua
            </Link>
          </div>

          <div className=" drop-shadow-xl ">
            <Carousel responsive={responsive} arrows={false}>
              {coursePromo.map((data) => (
                <CardCourse key={data.id} data={data} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-LightBlue5 py-8">
        <div className="container flex  flex-col gap-6 justify-center">
          <p className="text-center font-Montserrat font-bold md:text-4xl text-2xl text-BLUE05">
            Jangan lewatkan kesempatan ini !
          </p>
          <div className="self-center md:w-[50%]">
            <p className="text-center">
              Manfaatkan kelas gratis kami sekarang dan dapatkan akses tanpa
              batas untuk mengembangkan potensi Anda!
            </p>
          </div>
          <Link
            to={"/course"}
            className="bg-BLUE05 px-2 py-2 max-w-fit self-center text-white font-Montserrat font-medium rounded-md"
          >
            Mulai Sekarang
          </Link>
        </div>
      </div>
      <div className="drop-shadow-xl">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
