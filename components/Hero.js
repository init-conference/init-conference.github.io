export default function Hero() {
    return (
        <section className="hero bg-blue-dark flex flex-col-reverse lg:flex-row m-auto 3xl:max-w-[1680px] 2xl:max-w-[1375px] xl:max-w-[1150px] max-w-[1140px] px-6 xl:px-0">
            <div className="lg:w-1/2 lg:mt-40 ">
                <h2 className="font-bold 3xl:text-[160px] 2xl:text-[112px] xl:text-[88px] text-7xl leading-[70px] 3xl:leading-[131px] 2xl:leading-[92px] xl:leading-[72px] uppercase no-underline mb-12">
                    <span className="text-yellow">
                        Say
                        <br />
                    </span>
                    <span className="text-pink">
                        hello
                        <br />
                        world{" "}
                    </span>
                    <span className="text-blue">
                        in <br />
                        person
                    </span>
                </h2>
                <p className="3xl:text-[32px] 2xl:text-[28px] xl:text-[22px] text-[18px] 3xl:leading-8 2xl:leading-7 xl:leading-[26px] leading-6 uppercase mb-10 3xl:pl-36 2xl:pl-32 xl:pl-[68px]">
                    Lets meet on Sep 24th 2022
                    <br />
                    Banski Dvor / Banja Luka
                    <br />
                    Bosnia and Herzegovina
                </p>
                <nav className="hero-nav xl:pl-[68px] 2xl:pl-[130px] 3xl:pl-36">
                    <ul className="text-center lg:text-left">
                        <li className="lg:inline-block block xl:mr-10 mb-8 lg:mb-0">
                            <a
                                className="bracket-button text-[22px] xl:text-[32px] uppercase font-semibold text-pink xl:px-6 px-5"
                                target="_blank"
                                href="https://sessionize.com/init-2022/"
                                rel="noreferrer"
                            >
                                Apply to speak
                            </a>
                        </li>
                        <li className="lg:inline-block block">
                            <a
                                className="bracket-button text-[22px] xl:text-[32px] uppercase font-semibold text-blue xl:px-6 px-5 relative"
                                href="#tickets"
                            >
                                Tickets
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="lg:w-1/2 xl:mt-12 lg:mt-[12%] mt-20 lg:pr-10">
                <img
                    src="/assets/images/hero.png"
                    alt="hero"
                    width="953"
                    height={953}
                />
            </div>
        </section>
    );
}
