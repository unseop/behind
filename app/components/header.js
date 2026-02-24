import Link from "next/link"
import "../css/footer.css"

export default function Header() {
    return(
        <header>
            <div className="inner_1520">
                <Link href={'/'} className="header_desc">
                    HOME
                </Link>
                <Link href={'../portfolioList'} className="header_desc">Portfolio</Link>
            </div>
        </header>
    )
}