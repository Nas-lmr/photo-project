function HeroSection() {
  return (
    <section
      className="h-1/3 sm:h-2/5 md:h-2/5 lg:h-mid xl:h-3/4 2xl:h-3/5 bg-cover bg-center"
      style={{ backgroundImage: "url(/images/mountain.jpg)" }}
    >
      <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl  2xl:text-5xl text-center  ">
          Capturer l&apos;instant, raconter une histoire.
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
