import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#FF8BB7] grid grid-cols-1 sm:grid-cols-4 text-[#770006] mt-14 p-10">
      <h2 className="font-semibold text-xl col-span-1 sm:col-span-4 flex items-center justify-center mb-6">
        About Us
      </h2>
      <div className="col-span-1 flex flex-col items-center justify-center mb-4 md:mb-0">
        <Image src="/logo.png" alt="logo" height={100} width={100} />
        <p className="text-base md:text-lg font-medium mt-2">Quintessential</p>
      </div>
      <div className="col-span-1 sm:col-span-3 flex items-center">
        <p className="text-xs md:text-sm lg:text-base text-justify">
          Fruit is the sweet, fleshy, edible part of a plant. It generally
          contains seeds. Fruits are usually eaten raw, although some varieties
          can be cooked. They come in a wide variety of colours, shapes and
          flavours. Common types of fruits that are readily available. Fruit is
          the sweet, fleshy, edible part of a plant. It generally contains
          seeds. Fruits are usually eaten raw, although some varieties can be
          cooked. They come in a wide variety of colours, shapes and flavours.
          Common types of fruits that are readily available.
        </p>
      </div>
    </div>
  );
};

export default About;
