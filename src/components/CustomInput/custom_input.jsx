import clsx from 'clsx';
import styles from './Input.module.css';

const Custom_input = ({type, value, setValue, placeholder, className, title, required, error, setError, id}) => {
          return (
                    <div className={className} >
                              <label className={styles.labelStyle} htmlFor={id}>{title}{required ? '*' : '' }</label>
                              <input 
                                        id={id}
                                        name={id}
                                        required={required}
                                        type={type} 
                                        className={ clsx(styles.input, error && styles.inputError)}
                                        value={value}
                                        onChange={(e)=>setValue(e.target.value)}
                                        onFocus={()=>setError("")}
                                        placeholder={placeholder}
                              />
                              {
                                        error && <p className={styles.error} >{error}</p>
                              }
                    </div>
          )
}

export default Custom_input