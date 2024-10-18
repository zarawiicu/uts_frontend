//import React from 'react';

function RegistrationForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-fuchsia-300 to-sky-500">
      <div className="w-full max-w-xl p-6 bg-sky-100 rounded">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            FORMULIR PENDAFTARAN
          </h1>
        </div>

        <form>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="firstname"
              >
                Nama Awal
              </label>
              <input
                type="text"
                id="firstname"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your first name"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="middlename"
              >
                Nama Tengah
              </label>
              <input
                type="text"
                id="middlename"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your middle name"
              />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="lastname"
              >
                Nama Akhir
              </label>
              <input
                type="text"
                id="lastname"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your last name"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="course"
              >
                Kursus
              </label>
              <select
                id="course"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Pilih Kursus</option>
                <option value="course1">Kursus1</option>
                <option value="course2">Kursus 2</option>
                <option value="course3">Kursus 3</option>
              </select>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-gray-700 font-bold mb-2">
                Jenis Kelaminr
              </label>
              <div className="flex items-center space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Laki-Laki</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Perempuan</span>
                </label>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="phone"
              >
                Mo. Telp
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+91"
              />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="address"
              >
                Alamat
              </label>
              <textarea
                id="address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your address"
                rows="3"
              ></textarea>
            </div>

            <div className="sm:col-span-3">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="retype-password"
              >
                Ketik Ulang Password
              </label>
              <input
                type="password"
                id="retype-password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Re-type your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-3 py-3 px-4 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-gray-100 block transition duration-300"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
