import clsx from 'clsx';
import styles from './Input.module.css';
import Select from 'react-select'

const Custom_dropdown = ({value, setValue, placeholder, className, title, required, error, setError, id, options}) => {
          return (
                    <div className={className} >
                              <label className={styles.labelStyle} htmlFor={id}>{title}{required ? '*' : '' }</label>
                              <Select 
                              options={options} 
                              value={value}
                              placeholder={placeholder}
                              onMenuOpen={()=> setError('')}
                              onChange={setValue}
                              styles={{
                                        control: (baseStyles, state) => ({
                                                  ...baseStyles,
                                                  borderColor: state.isFocused ? "var(--accent)" : error ? 'var(--error)' : 'var(--border-color)',
                                                  borderWidth : '0.5px',
                                                  height: '50px',
                                                  borderRadius : '30px',
                                                  padding : '0px 30px',
                                                  fontSize : 15,
                                                  outline : 'none',
                                                  boxShadow : 'none'
                                        }),
                                        valueContainer : (baseStyles, state) => ({
                                                  ...baseStyles,
                                                  padding : '0px'
                                        }),
                                        indicatorSeparator: (baseStyles, state) => ({
                                                  ...baseStyles,
                                                  display : 'none'
                                        }),
                                        dropdownIndicator: (baseStyles, state) => ({
                                                  ...baseStyles,
                                                  padding : '0px'
                                        }),
                                        option: (baseStyles, state) => ({
                                                  ...baseStyles,
                                                  fontSize : '13px'
                                        }),
                              }}
                              />
                              {
                                        error && <p className={styles.error} >{error}</p>
                              }
                    </div>
          )
}

export default Custom_dropdown