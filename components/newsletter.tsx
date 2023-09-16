const Newsletter = () => {
  return (
    <div className="py-[20px] w-full px-[10px] md:p-[70px] lg:px-[150px] xl:px-[200px] border border-lightViolet rounded-[20px] flex flex-col gap-[30px] items-center">
      <h2 className="font-bold text-[16px] leading-[350%] md:text-[40px] md:leading-[130%] text-center uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-lightViolet">
        S'inscrire à la newsletter
      </h2>

      {/* Desktop */}
      <div className="py-[8px] hidden md:flex items-center justify-between w-full pl-[40px] pr-[8px] border border-lightViolet rounded-[50px]">
        <input type="email" placeholder="Email" className="outline-none text-lightGray w-full pr-[20px] bg-transparent py-[10px]" />
        <button className="rounded-[50px] border border-lightViolet bg-lightGreen px-[30px] py-[15px] text-black">S'inscrire</button>
      </div>

      {/* Responsive */}
      <input
        type="email"
        placeholder="Email"
        className="md:hidden outline-none rounded-[50px] border border-lightViolet bg-transparent text-center px-[15px] py-[20px] w-full text-lightGray"
      />
      <button className="md:hidden bg-lightGreen rounded-[50px] px-[30px] py-[15px] text-black text-[20px] font-bold leading-[150%] w-full border border-lightViolet">
        S'inscrire
      </button>
    </div>
  );
};

export default Newsletter;
