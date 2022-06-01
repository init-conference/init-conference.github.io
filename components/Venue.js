export default function Venue() {
    return (
        <section className="venue lg:mt-52 mt-20 3xl:mb-52 xl:mb-28 lg:pb-48 pb-[60%]" id="venue">
            <div className="3xl:max-w-[1680px] 2xl:max-w-[1375px] xl:max-w-[1150px] max-w-[1140px] px-6 xl:px-0 m-auto">
            <h2 className="3xl:text-[104px] 2xl:text-[72px] xl:text-[56px] text-[40px] uppercase text-yellow font-semibold 3xl:leading-[92px] 2xl:leading-[72px] xl:leading-[50px] leading-[36px] mb-14">Venue</h2>
            
            <div className="m-auto relative">
                <div className="3xl:ml-36 2xl:ml-[115px] xl:ml-24 lg:max-w-[550px]">
                    <p className="3xl:text-5xl 2xl:text-[40px] xl:text-[32px] text-[24px] 2xl:leading-[40px] xl:leading-[32px] leading-6 uppercase text-justify 3xl:max-w-[686px] 2xl:max-w-[560px] xl:max-w-[466px] mb-14 xl:mb-9">
                        Banski Dvor is one of the most beautiful historical buildings,
                        located in the very heart of the city it was built in the period
                        1931-32 as the seat of Duke of Vrbas Banovina. The building is
                        close to all major hotels and city attractions, with plenty of
                        restaurants around. Parking spots are available on several
                        nearby locations.
                    </p>
                    <p className="text-3xl xl:text-2xl text-[24px] leading-6 xl:leading-7 uppercase mb-8">
                        Banski Dvor
                        <br />
                        Trg Srpskih Vladara 2, Banja Luka
                        <br />
                        Bosnia and Herzegovina
                    </p>
                    <p>
                        <a className="uppercase text-blue text-[22px] xl:text-[32px] xl:px-6 px-5 bracket-button font-semibold" href="https://goo.gl/maps/3njPEwt6m5Dr3A236">
                        <img className="inline-block mr-4 -mt-1"
                        src="/assets/images/google-maps-logo.png"
                        alt="cfp"
                         />
                         View on Google Maps
                        </a>
                    </p>
                </div>

                    <img className="absolute top-[0px] right-[0px] -z-10 3xl:max-w-[70%] 2xl:max-w-[60%] xl:max-w-[58%] lg:max-w-[58%] hidden lg:block"
                    src="/assets/images/pozadina.png"
                    alt="cfp"
                     />
                     <div className="">&nbsp;</div>
            </div>
            </div>
        </section>
    );
}
