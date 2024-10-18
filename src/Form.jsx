//import React from 'react';
import BackgroundImage from './assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function RegistrationForm() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left section with image and text */}
      <div className="hidden md:flex w-1/2 bg-no-repeat bg-center bg-white text-white items-center justify-center" style={{
          backgroundImage: `url(${BackgroundImage})`, width: '50%'
        }}>
        
        <div className="flex flex-col justify-end items-start h-screen w-full py-10 mb-5 ml-8" >
          
          <p className="text-lg text-black px-5 mb-4">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 text-red-500 mr-2" />
            Jl. Duta Daan 117, Banjar, Jawa Barat 47433
          </p>
          
          <p className="text-lg text-black px-5 mb-4">
          <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-red-500 mr-2" />
            0123456789
          </p>

          <p className="text-lg text-black px-5 mb-4">
          <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-red-500 mr-2" />
            halo@situssupercanggih.co.id
          </p>
        </div>
        
      </div>

      <div className="flex flex-col justify-center w-full md:w-1/2 p-8 bg-red-500/50">
      <div className="max-w-md mx-auto w-full">
        <form>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="namaLengkap">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="namaLengkap"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="sm:col-span-3">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="tempatLahir">
              Tempat Lahir
            </label>
            <input
              type="text"
              id="tempatLahir"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="jenisKelamin">
              Jenis Kelamin
            </label>
            <select
              id="jenisKelamin"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="alamat">
              Alamat
            </label>
            <input
              type="text"
              id="alamat"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="namaOrtu">
              Nama Orang Tua
            </label>
            <input
              type="text"
              id="namaOrtu"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="sm:col-span-3">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="teleponOrtu">
              No. Telepon Orang Tua
            </label>
            <input
              type="tel"
              id="teleponOrtu"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          </div>

          <div className="mb-6 py-1">
            <label className="block text-gray-700 font-bold mb-2">Program Kursus</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-red-500"
                  value="Serius 1 Bulan"
                />
                <span className="ml-2 text-gray-700">Serius 1 Bulan</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-red-500"
                  value="Santai 2 Bulan"
                />
                <span className="ml-2 text-gray-700">Santai 2 Bulan</span>
              </label>
            </div>
          </div>

          <div className="mb-6 py-1">
            <label className="block text-gray-700 font-bold mb-2">Waktu Kursus</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="waktu"
                  value="10:00 - 11:30"
                  className="form-radio text-red-500"
                />
                <span className="ml-2 text-gray-700">10:00 - 11:30</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="waktu"
                  value="14:00 - 15:30"
                  className="form-radio text-red-500"
                />
                <span className="ml-2 text-gray-700">14:00 - 15:30</span>
              </label>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label className="block text-gray-700 font-bold mb-2">Mengikuti</label>
            <input
              type="text"
              id="mengikuti"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="sm:col-span-3">
            <label className="block text-gray-700 font-bold mb-2">Calon Seksi</label>
            <input
              type="text"
              id="calonSeksi"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          </div>

          <div className="text-center mt-4">
              <span className="text-gray-700">Belum punya akun? </span>
              <a href="#" className="text-white font-boldhover:underline">
                Daftar
              </a>
            </div>
          </form>

        </div>
        </div>
        </div>
  );
}

export default RegistrationForm;
