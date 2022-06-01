export default function Subscribe() {
    return (
        <section className="subscribe bg-pink 3xl:max-w-[1680px] 2xl:max-w-[1375px] xl:max-w-[1150px] max-w-[1140px] px-6 xl:px-0 m-auto lg:mt-48 text-blue-dark 3xl:pl-36 2xl:pl-[115px] xl:pl-24 lg:py-36 py-20 xl:py-28 flex flex-col-reverse lg:flex-row relative">
            <div className="lg:w-1/2">
                <p className="uppercase 3xl:text-[32px] 2xl:text-[28px] xl:text-[22px] text-lg 3xl:mb-12 2xl:mb-5 mb-8 3xl:max-w-[619px] 2xl:max-w-[500px] xl:max-w-[460px] text-justify 3xl:leading-[38px] xl:leading-7">
                    Subscribe to our newsletter and be the first to hear about Init
                    2022 news and speaker updates.
                </p>

                <form
                    action="https://initconf.us3.list-manage.com/subscribe/post?u=a81db3adf5c22016de4befb2c&amp;id=1ea8a34eb8"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    target="_blank"
                    noValidate
                    className="subscribe-form xl:pl-32"
                >
                    <input className="bg-transparent border-0 border-b-[1px] mb-8 text-[#552F55] uppercase xl:text-2xl focus:outline-none ring-transparent 3xl:w-[423px] 2xl:w-[423px] xl:w-[423px] w-[100%]" type="email" name="EMAIL" placeholder="Your email" /> 
                    <button className="text-[22px] xl:text-[32px] uppercase font-semibold bracket-button xl:px-6 px-5 block leading-9 xl:ml-32" type="submit">Subscribe</button>
                </form>
            </div>

            <div className="-mt-[74%] lg:mt-0">
                <img className="lg:absolute -top-[110px] right-0 xl:-right-[25px] 3xl:max-w-[44%] 2xl:max-w-[48%] xl:max-w-[56%] lg:max-w-[59%] m-auto"
                src="/assets/images/konj-footer.png"
                alt="cfp"
                />
            </div>
        </section>
    );
}
