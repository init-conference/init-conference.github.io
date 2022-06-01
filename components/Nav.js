export default function Nav() {
    return (
        <div className="navigation">
            <h1 className="text-3xl">
                <a className="nav-logo" href="https://initconf.org">
                    <img
                        alt="logo"
                        src="/assets/images/header-logo.png"
                        className="w-32 left-10 top-10 absolute"
                    />
                </a>
            </h1>

            <nav className="absolute right-10 top-10 text-right uppercase 3xl:text-2xl 2xl:text-lg xl:text-base opacity-60 z-10">
                <ul>
                    <li>
                        <a href="#call-for-papers">About</a>
                    </li>
                    <li>
                        <a href="#call-for-papers">Call for papers</a>
                    </li>
                    {/* <li>
                        <a href="#tickets">Tickets</a>
                    </li> */}
                    <li>
                        <a href="#venue">Venue</a>
                    </li>
                    <li>
                        <a href="#gallery">Gallery</a>
                    </li>
                    {/* <li>
                        <a href="#sponsors">Sponsors</a>
                    </li> */}
                    <li>
                        <a
                            href="https://www.dzobs.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Jobs
                        </a>
                    </li>
                    <li>
                        <a href="/team">Team</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
