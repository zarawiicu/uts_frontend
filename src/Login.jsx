//import React from 'react';
import BackgroundImage from './assets/rapatBaru.jpg';

function Login() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left section with image and text */}
      <div className="hidden md:flex w-1/2 bg-contain bg-no-repeat bg-center bg-cover bg-blue-900 text-white items-center justify-center" style={{
          backgroundImage: `url(${BackgroundImage})`, width: '50%'
        }}>
        <div className="flex flex-col justify-center items-center bg-blue-500/50 w-full h-full">
          <h1 className="text-3xl font-bold text-white text-cente mt-2">Welcome to Cards Onboarding</h1>
          <p className="text-lg text-white text-center px-1">
            &quot;CARDS - Kartu Digital&quot; memungkinkan kita mengelola kartu siswa/santri atau membership
            lainnya sebagai media informasi dan transaksi. Terintegrasi dengan CAZH Membership
            Management dan CAZH Point of Sale (POS).
          </p>
        </div>
      </div>

      {/* Right section with login form */}
      <div className="flex flex-col justify-center w-full md:w-1/2 p-8 bg-white">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Masuk ke akun anda!</h2>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Lupa Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
            >
              Masuk
            </button>

            <div className="text-center mt-4">
              <span className="text-gray-700">Belum punya akun? </span>
              <a href="#" className="text-blue-500 hover:underline">
                Daftar
              </a>
            </div>
          </form>

          <div className="flex justify-between items-center mt-8 text-gray-500 text-sm">
            <a href="#" className="hover:underline">Kontak</a>
            <a href="#" className="hover:underline">Tentang Kami</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
