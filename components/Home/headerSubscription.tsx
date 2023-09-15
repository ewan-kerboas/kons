const HeaderSubscription = () => {
    return (
        <div className='absolute -bottom-[10%] rounded-[15px] p-[20px] md:p-[30px] flex flex-col gap-[20px] bg-[#272634] left-0 right-0 mx-[20px] md:flex-row md:justify-between md:mx-auto md:w-4/5 lg:w-2/3 xl:w-[800px]'>
            <div className="flex items-center gap-[15px] md:gap-[30px] xl:gap-[40px]">
                <div className="w-1/2 flex gap-[15px] md:gap-[30px]">
                    <div className='w-[2px] md:h-[60px] bg-white rounded-md' />
                    <div className="flex flex-col justify-center">
                        <h4 className='text-[14px] md:text-[16px] lg:text-[18px] font-bold leading-[150%] whitespace-nowrap text-white'>Valeur individuel</h4>
                        <p className='text-lightGreen text-[18px] lg:text-[22px] font-bold leading-[150%]'>75 €</p>
                    </div>
                </div>
                <div className="w-1/2 flex gap-[15px] md:gap-[30px]">
                    <div className='w-[2px] md:h-[60px] bg-white rounded-md' />
                    <div className="flex flex-col justify-center">
                        <h4 className='text-[14px] md:text-[16px] lg:text-[18px] font-bold leading-[150%] whitespace-nowrap text-white'>Valeur abonnement</h4>
                        <p className='text-lightGreen text-[18px] lg:text-[22px] font-bold leading-[150%]'>9.99 €</p>
                    </div>
                </div>
            </div>
            <button className='bg-lightViolet rounded-[10px] py-[20px] px-[35px] xl:px-[60px] text-center border-none '>
                <p className='text-[18px] font-bold leading-[150%]'>S'abonner</p>
            </button>
        </div>
    )
}

export default HeaderSubscription