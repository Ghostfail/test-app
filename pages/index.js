import { Button, IconButton } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create'
import ClearIcon from '@material-ui/icons/Clear';
import { Form } from '../components/Form'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { InfoTab } from '../components/InfoTab'
import Icons from '../components/Icons';

export default function Home() {
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    let initial = localStorage.getItem('userData')
    initial && setData(JSON.parse(initial))
  }, [])

  const setData = ({name, email, phone}) => {
    setName(name)
    setEmail(email)
    setPhone(phone)
  }
  
  const showOrHideForm = () => {
    setShowForm(!showForm)
  }
  const getShortName = (str) => {
    return str.slice(0, str.indexOf(' ') + 2)
  }
  return (
    <div className={styles.bg}>
      <div className={styles.panel}>
      <Icons.Notifications/>
      <span className={styles.line}/>
      <span className={styles.avatar_icon_small}/>
        <span className={styles.short_name}>{getShortName(name) + '.'}</span>
      </div>
      <span className={styles.white_text}>
        <p className={styles.title}>Личный профиль</p>
        <p>Главная / Личный профиль</p>
      </span>
      <div className={styles.name_block}>  
        <span className={styles.avatar_icon}/>
        <p className={styles.name}>{name ? name : 'Ваше Имя '}</p>
        <IconButton onClick = {showOrHideForm}>
          { showForm ? <ClearIcon fontSize="large"/> : <CreateIcon fontSize="large"/>}
        </IconButton>
      </div>
      
      { showForm ? <Form setShowForm={setShowForm} setData={setData}/> : <InfoTab email={email} phone={phone} /> }
    </div>
  )
}
