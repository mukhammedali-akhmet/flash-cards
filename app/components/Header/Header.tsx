'use client'
import Link from 'next/link'
import Image from 'next/image'
import { IoMenu } from 'react-icons/io5'
import styles from "./Header.module.scss"
import logo from "@/assets/logo.svg"
import pfp from "@/assets/pfp.svg"
import { BiPlus, BiSearch } from 'react-icons/bi'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__left}>
                    <button
                        className={styles.header__menu}
                        title="Menu"
                        aria-label="Menu"
                    >
                        <IoMenu color="white" size={30} />
                    </button>
                    <Link title="Flash Cards"
                        aria-label="Flash Cards" className={styles.header__logo} href="/">
                        <Image src={logo} width={45} height={45} alt='Logo' />
                    </Link>
                </div>
                <div className={styles.header__search}>
                    <label htmlFor="search">
                        <BiSearch size={20} />
                    </label>
                    <input id="search" type="text" placeholder="Search for flash cards" />
                </div>
                <div className={styles.header__right}>
                    <Link className={styles.header__create} title="Create"
                        aria-label="Create" href="/new">
                        <BiPlus size={25} />
                    </Link>
                    <Link className={styles.header__account} title="Account"
                        aria-label="Account" href="/account">
                        <Image src={pfp} width={38} height={38} alt="User" />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header