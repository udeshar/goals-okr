import styles from './CustomButton.module.css'

const CustomButton = ({text, onClick, className}) => {
          return (
                    <div className={className + " allcenter " +styles.customBtn} onClick={onClick}  >
                              <p>{text}</p>
                    </div>
          )
}

export default CustomButton