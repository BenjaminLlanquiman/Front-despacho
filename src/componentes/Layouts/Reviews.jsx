function Reviews() {
  return (
    <div className="bg-white  sm:py-10">
      <div className="mx-auto text-center ">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Empresas que confían en nosotros
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <img
  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  alt="Apple" width="158" height="48"
/>

<img
  src="https://upload.wikimedia.org/wikipedia/commons/9/93/HyperX_logo.svg"
  alt="HyperX" width="158" height="48"
/>

<img
  src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logitech_logo.svg"
  alt="Logitech" width="158" height="48"
/>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
