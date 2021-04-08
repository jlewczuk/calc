import s from './Input.module.css';

const Input = (props) => {
    return (
            <div className={s.input}>
                {props.input}
            </div>
    )
}

export default Input;