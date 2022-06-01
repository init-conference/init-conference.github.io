export default function Sponsors() {
    return (
        <section className="sponsors" id="sponsors">
            <h3>Sponsors</h3>
            <p className="sponsors-desc">
                INIT is completely funded by donations. We are grateful to our
                sponsors and friends who are making the conference possible.
            </p>
            <p>
                <a href="#sponsors">Support us</a>
            </p>

            <h4>Activists</h4>
            <ul>
                <li>
                    <a href="{{ .link }}" title="{{ .name }}">
                        <img src="/nest/sup.jpg" title="{{ .name }}" />
                    </a>
                </li>
            </ul>

            <h4>Supporters</h4>
            <ul>
                <li>
                    <a href="{{ .link }}" title="{{ .name }}">
                        <img src="/nest/sup.jpg" title="{{ .name }}" />
                    </a>
                </li>
            </ul>

            <h4>Friends</h4>
            <ul>
                <li>
                    <a href="{{ .link }}" title="{{ .name }}">
                        <img src="/nest/sup.jpg" title="{{ .name }}" />
                    </a>
                </li>
            </ul>
        </section>
    );
}
