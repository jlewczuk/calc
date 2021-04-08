import s from './ClearButton.module.css';

const ClearButton = (props) => {
    return (
            <div className={s.clear}
                onClick={() => props.handleClear()}
            >
                {props.children}

            </div>
    )
}

export default ClearButton;