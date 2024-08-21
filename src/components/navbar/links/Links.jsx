import Link from "next/link";
import style from "./links.module.css";
import NavLink from "./navLink/NavLink";

const Links = () => {
    const links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        }
    ];

    return (
        <div className={style.links}>
            {links.map((link => (
                <NavLink item={link} key={link.title} />
            )))}
        </div>
    )
}

export default Links;