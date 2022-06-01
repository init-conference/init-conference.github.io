export default function Footer() {
    return (
        <footer id="contact" className="3xl:max-w-[1680px] 2xl:max-w-[1375px] xl:max-w-[1150px] max-w-[1140px] px-6 lg:px-0 m-auto mt-10 lg:mt-0 lg:grid-cols-3 grid uppercase pt-10 pb-14">

                    <p className="opacity-70 lg:text-left text-center mb-14 lg:mb-0">
                        <a className="bracket-button px-4"  href="#tickets">Buy a ticket</a>
                        <br /><span className="mb-3 block"></span>
                    <a className="bracket-button px-4" href="#sponsors">Become a sponsor</a>
                    </p>
                    <p className="text-center mb-14 lg:mb-0">
                        +387 65 439 975
                        <br /><span className="mb-3 block"></span>
                        <a className="opacity-70 bracket-button px-4" href="mailto:info@initconf.org">info@initconf.org</a>
                    </p>
                    <p className="lg:text-right text-center opacity-70">
                        Powered by
                        <br /><span className="mb-3 block"></span>
                        <a className="bracket-button px-4" href="https://sessionize.com/">sessionize.com</a>
                    </p>
            
        </footer>
    );
}
