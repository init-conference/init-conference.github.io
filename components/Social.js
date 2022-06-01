export default function Social() {
    return (
        <ul className="social-networks text-center lg:absolute right-8 xl:top-[83vh] lg:top-[68vh]">
            <li className="mb-5 px-2 lg:px-0 inline-block lg:block opacity-40 hover:opacity-70">
                <a
                    target="_blank"
                    href="https://github.com/init-conference"
                    rel="noreferrer"
                >
                    <img src="assets/images/social/gh.png" />
                </a>
            </li>
            <li className="mb-5 px-2 lg:px-0 inline-block lg:block opacity-40 hover:opacity-70">
                <a
                    target="_blank"
                    href="https://twitter.com/InitConfBL"
                    rel="noreferrer"
                >
                    <img src="assets/images/social/tw.png" />
                </a>
            </li>
            <li className="mb-5 px-2 lg:px-0 inline-block lg:block opacity-40 hover:opacity-70">
                <a
                    target="_blank"
                    href="https://www.facebook.com/initBL/"
                    rel="noreferrer"
                >
                    <img src="assets/images/social/fn.png" />
                </a>
            </li>
            <li className="mb-5 px-2 lg:px-0 inline-block lg:block opacity-40 hover:opacity-70">
                <a
                    target="_blank"
                    href="https://www.instagram.com/initconfbl/"
                    rel="noreferrer"
                >
                    <img src="assets/images/social/in.png" />
                </a>
            </li>
        </ul>
    );
}
