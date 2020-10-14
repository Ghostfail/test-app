import styles from '../styles/Form.module.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useRef, useState } from 'react'
import Icons from './Icons'
import InputMask from 'react-input-mask';
import Alert from './Alert'


export const Form = ({setData, setShowForm}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [nameIsValid, setNameIsValid] = useState(true)
    const [emailIsValid, setEmailIsValid] = useState(true)
    // const [phoneIsValid, setPhoneIsValid] = useState(true)
    const name = useRef('')
    const email = useRef('')
    const phone = useRef('')
    
    const nameValidation = (event) => {
        const regExp = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/
        regExp.test(event.target.value) ? setNameIsValid(true) : setNameIsValid(false)
    }
    const emailValidation = (event) => {
        const regExp = /\S+@\S+\.\S+/
        regExp.test(event.target.value) ? setEmailIsValid(true) : setEmailIsValid(false)
    }
    const fetchData = (data) => {
        fetch('http://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token-access': 'random'
            },
            body: JSON.stringify(data)
        })
    }
    const saveData = () => {
        setIsOpen(false)
        setShowForm(false)
        fetchData({name: name.current.value , email: email.current.value, phone: phone.current.value })
        localStorage.setItem('userData', JSON.stringify({name: name.current.value , email: email.current.value, phone: phone.current.value }))
        setData({name: name.current.value , email: email.current.value, phone: phone.current.value })
    }
    const dontSaveData = () => {
        setIsOpen(false)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        setIsOpen(true)
    }
    return (
        <>
        <div className={styles.form_container}>
            <form onSubmit={onSubmitHandler} >
                <div className={styles.form}>
                    <div className={styles.form_block}>
                        <div >
                            <Icons.Person/>
                            <TextField error={!nameIsValid} inputRef={name} onChange={nameValidation} label='Фамилия Имя' variant="outlined" />
                        </div>
                        <div >
                            <Icons.Email/>
                            <TextField error={!emailIsValid} inputRef={email} onChange={emailValidation} label='Email' variant="outlined" />
                        </div>
                        <div >
                            <Icons.Phone/>
                            <InputMask mask='+7 999 999 99 99'>
                                {() => <TextField inputRef={phone}  label='Телефон' variant="outlined" />}
                            </InputMask>
                        </div>
                    </div>
                    <Button disabled={nameIsValid && emailIsValid ? false : true} type='submit' variant="contained" style={{display:'block',margin: '0 auto'}} color="primary">Сохранить изменения</Button>
                </div>
            </form>
        </div>
        <Alert isOpen={isOpen} saveChanges={saveData} dontSaveChanges={dontSaveData}/>
        </>
    

    )
}

