import clsx from 'clsx';
import styles from './Input.module.css';
import Select from 'react-select'

const Custom_dropdown = ({value, setValue, placeholder, className, title, required, error, setError, id, options, styleInside, isMulti}) => {
          return (
                    <div className={className} >
                              <label className={styles.labelStyle} htmlFor={id}>{title}{required ? '*' : '' }</label>
                              <Select 
                              isMulti={isMulti}
                              options={options} 
                              value={value}
                              placeholder={placeholder}
                              onMenuOpen={()=> setError('')}
                              onChange={setValue}
                              styles={{
                                        control: (baseStyles, state) => ({
                                                  ...baseStyles,
                                                  backgroundColor : 'var(--background-color)',
                                                  borderColor: state.isFocused ? "var(--accent)" : error ? 'var(--error)' : 'var(--border-color)',
                                                  borderWidth : '0.5px',
                                                  height: '50px',
                                                  borderRadius : '30px',
                                                  padding : '0px 30px',
                                                  fontSize : 15,
                                                  outline : 'none',
                                                  color : 'var(--bs-body-color)',
                                                  boxShadow : 'none',
                                                  ...styleInside,
                                        }),
                                        valueContainer : (baseStyles, state) => ({
                                                  ...baseStyles,
                                                  backgroundColor : 'var(--background-color)',
                                                  color : 'var(--bs-body-color) !important',
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
                                                  color : 'var(--bs-body-color)',
                                                  fontSize : '13px',
                                                  backgroundColor : 'var(--below-background-color)',
                                                  "&:hover" : {
                                                            backgroundColor : "var(--hover-color)"
                                                  }
                                        }),
                                        singleValue: (baseStyles, state) => ({
                                                  ...baseStyles,
                                                  color : 'var(--bs-body-color)'
                                        }),
                                        menu: (baseStyles, state) => ({
                                                  ...baseStyles,
                                                  color : 'var(--bs-body-color)',
                                                  backgroundColor : 'var(--below-background-color)',
                                        })
                              }}
                              />
                              {
                                        error && <p className={styles.error} >{error}</p>
                              }
                    </div>
          )
}

export default Custom_dropdown