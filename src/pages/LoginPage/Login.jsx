import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import logo from "../../assets/Belajar_white 2.svg";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/AuthActions";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState("");
  // const [alertStatus, setAlertStatus] = useState(false);

  //fungsi show/hidden password
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  //animasi loading setelah button submit diklik

  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch(login(email, password, setIsLoading, setAlert, navigate));
  };

  useEffect(() => {
    // Fungsi untuk menyembunyikan alert setelah 3000 milidetik (3 detik)
    const hideAlert = () => {
      setAlert(""); // Menghapus pesan alert
    };

    // Memulai timeout ketika alertMessage berubah
    if (alert) {
      const timeoutId = setTimeout(hideAlert, 2500);

      // Membersihkan timeout jika komponen di-unmount atau alertMessage berubah
      return () => clearTimeout(timeoutId);
    }
  }, [alert]);

  return (
    <>
      {/* <div className="lg:hidden flex justify-center items-center bg-DARKBLUE05 w-full h-20">
        <img src={logo} alt="logo" className="w-60 h-60" />
      </div> */}
      <div className="flex min-h-screen bg-DARKBLUE04 ">
        <div className="w-[100%] lg:w-[50%] flex justify-start items-center mx-[23px] lg:px-[145px] relative ">
          <form onSubmit={handleLogin} className="w-full  ">
            <h1 className="text-[24px] font-bold text-DARKBLUE05 font-Montserrat mb-8">
              Masuk
            </h1>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label className="font-Poppins text-[15px] mb-[4px]">
                  Email/No Telepon
                </label>
                <input
                  type="email"
                  className="border w-full py-3 px-4 rounded-2xl"
                  placeholder="Contoh: johndoe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="font-Poppins text-[15px] mb-[4px]">
                    Password
                  </label>
                  <Link to="/verify-email">
                    <span className="font-Poppins text-[11px] text-DARKBLUE05 transition duration-300 ease-in-out hover:underline hover:border-DARKBLUE05">
                      Lupa Kata Sandi
                    </span>
                  </Link>
                </div>
                <div className="relative ">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="border w-full py-3 px-4 rounded-2xl pr-[3.5rem] "
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 px-3 py-1 "
                  >
                    {showPassword ? (
                      <FiEyeOff className="border-none" />
                    ) : (
                      <FiEye className="border-none" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full font-Poppins bg-DARKBLUE05 text-white py-[10px] rounded-2xl mt-5 hover:bg-DARKBLUE03"
            >
              {isLoading ? "Loading..." : "Masuk"}
            </button>
            <div className="flex justify-center items-center gap-2 mt-6">
              <h1 className="font-Poppins text-[14px] font-normal">
                Belum punya akun?
              </h1>
              <Link
                to="/register"
                className="font-Poppins text-DARKBLUE05 text-[14px] font-bold transition duration-300 ease-in-out hover:underline hover:border-DARKBLUE05"
              >
                Daftar di sini
              </Link>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center w-full md:max-w-[50%]  ">
              {alert && (
                <div className="py-2 flex justify-center w-full px-2 font-Poppins text-[14px] text-LightBlue5 font-medium rounded-lg text-center bg-ALERTRED">
                  {alert}!
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="hidden lg:flex justify-center items-center bg-DARKBLUE05 w-[50%] min-h-[100dvh]">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Login;
