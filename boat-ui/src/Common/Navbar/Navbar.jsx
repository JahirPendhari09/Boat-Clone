import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; 


const Navbar = () => {
    return <div className={styles.mainNavbar}>
        <div className={styles.logo}>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434" alt="Boat-logo" />
        </div>
        <div className={styles.categories}>
            <Link>Categories</Link>
            <Link>boAt Truly Yours</Link>
            <Link>Gift with boAt</Link>
            <Link>corporate Orders</Link>
            <Link>More</Link>
        </div>
        <div className={styles.search}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AvKIi7Hv_oh_hgxKrDqEfjfR5GYjDM_CeQ&usqp=CAU" alt="seach logo" />
            <input type="text"  placeholder="Search Earphones" />
        </div>
        <div className={styles.userSection}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="profile-logo" />
            <img src="https://static.vecteezy.com/system/resources/previews/007/371/939/original/bag-icon-shopping-bag-icon-bag-logo-bag-illustration-free-vector.jpg" alt="cart-logo" />
        </div>
    </div>
}

export { Navbar }