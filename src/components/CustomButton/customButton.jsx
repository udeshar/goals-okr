import styles from './CustomButton.module.css'
import Spinner from 'react-bootstrap/Spinner';
import clsx from 'clsx'

const CustomButton = ({text, onClick, className, nofilled, loading}) => {
          return (
                    <div className={clsx(className, "allcenter ", styles.customBtn, nofilled && styles.nofill, loading && styles.loading)} onClick={()=>{
                              !loading && onClick()
                    }}  >
                              {
                                        loading &&
                                        <Spinner className="mx-2" animation="border" variant="light" size={'sm'} />
                              }
                              <p>{text}</p>
                    </div>
          )
}

export default CustomButton