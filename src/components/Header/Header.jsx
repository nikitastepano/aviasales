import style from './Header.module.scss'

// import { memo } from 'react'
// export const Header = memo(() => {
//     return (
//         <div className={style.header}>
//             <img src="/Logo.svg" alt="Logo" />
//         </div>
//     )
// })

export function Header() {
    return (
        <div className={style.header}>
            <img src="/Logo.svg" alt="Logo" />
        </div>
    )
}