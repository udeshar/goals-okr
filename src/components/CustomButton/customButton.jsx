import styles from './CustomButton.module.css'
import clsx from 'clsx'

const CustomButton = ({text, onClick, className, nofilled}) => {
          return (
                    <div className={clsx(className, "allcenter ", styles.customBtn, nofilled && styles.nofill)} onClick={onClick}  >
                              <p>{text}</p>
                    </div>
          )
}

export default CustomButton