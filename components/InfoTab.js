import styles from '../styles/Info.module.css'
import Icons from './Icons'


export const InfoTab = ({email, phone}) => {
    return(
        <div className={styles.email_phone_block}>
            <div className={styles.block}>
                <Icons.Email/>
                <p>{email ? email : 'Укажите вашу почту '}</p>
            </div>
            
            <div  className={styles.block}>
                <Icons.Phone/>
                <p>{phone ? phone : 'Укажите ваш номер телефона'}</p>
            </div>
        </div>
    )
}