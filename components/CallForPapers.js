export default function Cfp() {
    return (
        <section
            className="call-for-papers bg-yellow m-auto 3xl:max-w-[1680px] 2xl:max-w-[1375px] xl:max-w-[1150px] max-w-[1140px] px-6 text-blue-dark pt-32 3xl:pl-[140px] 2xl:pl-[115px] xl:pl-24 lg:pb-32 pb-20 flex flex-col-reverse lg:flex-row relative"
            id="call-for-papers"
        >
            <div>
                <h2 className="3xl:text-[104px] 2xl:text-[72px] xl:text-[56px] text-[40px] uppercase font-semibold 3xl:leading-[92px] 2xl:leading-[63px] xl:leading-[50px] leading-[36px] mb-3">
                    Call for
                    <br />
                    speakers is
                    <br />
                    still on
                </h2>
                <p className="uppercase 3xl:pl-36 2xl:pl-28 xl:pl-20 3xl:text-[32px] 2xl:text-[28px] xl:text-[22px] text-lg 3xl:max-w-[708px] 2xl:max-w-[555px] xl:max-w-[460px] lg:max-w-[560px] xl:leading-[26px] 2xl:leading-[33px] 3xl:leading-[38px] text-justify mb-8">
                    We still have room for amazing speakers. If you have a great
                    talk, get in touch.
                </p>
                <p className="text-center lg:text-left">
                    <a
                        className="uppercase text-[22px] xl:text-[32px] font-medium bracket-button xl:px-6 px-5 3xl:ml-80 2xl:ml-[39%] xl:ml-20"
                        href="https://sessionize.com/init-2022/"
                    >
                        Apply now
                    </a>
                </p>
            </div>

            <div className="lg:-mt-[16%] -mt-[76%]">
                <div className="lg:absolute 3xl:right-14 2xl:right-0 xl:right-14 lg:right-12">
                    <img
                        className="3xl:max-w-[100%] 2xl:max-w-[87%] xl:max-w-[72%] lg:max-w-[76%] max-w-[62%] lg:float-right m-auto"
                        src="/assets/images/cfp.png"
                        alt="cfp"
                    />
                </div>
            </div>
        </section>
    );
}
