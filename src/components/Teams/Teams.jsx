import React from 'react'
import styles from './teams.module.css';
import clsx from 'clsx';
import Link from 'next/link';

const Teams = ({data}) => {
          return (
                    <div className="mt-4" >
                              <p className={styles.heading}>Teams</p>
                              <div className={styles.teamWrapper + " mt-3"}>
                                        {
                                                  data.map((item,index) => (
                                                            <Link href="#" className={styles.singleTeam + ' d-flex align-items-center linkWithNoStyles'}>
                                                                      <div style={{ backgroundColor: item?.color }} className={styles.teamIcon + " allcenter"} >
                                                                                <p>{item?.name?.substring(0, 2)}</p>
                                                                      </div>
                                                                      <p className="ps-3" >{item?.name}</p>
                                                            </Link>
                                                  ))
                                        }
                              </div>
                    </div>
          )
}

export default Teams