import React from 'react'
import styles from './detailedProgress.module.css';
import clsx from 'clsx';

const DetailedProgress = () => {
          return (
                    <div className="mt-4" >
                              <p className={styles.heading}>Detailed Progress Analysis</p>
                              <div style={{overflow : 'auto'}} >
                                        <table className={clsx(styles.tableWrapper, 'mt-3')} >
                                                  <thead className={styles.theadWrapper}  >
                                                            <tr className={styles.theadTrWrapper}>
                                                                      <th>Team</th>
                                                                      <th>Completed</th>
                                                                      <th>In Progress</th>
                                                                      <th>Overdue</th>
                                                                      <th>Total Progress</th>
                                                            </tr>
                                                  </thead>
                                                  <tbody className={styles.tbodyWrapper}>
                                                            <tr className={styles.tbodyTrWrapper}>
                                                                      <td>Marketing</td>
                                                                      <td>50%</td>
                                                                      <td>30%</td>
                                                                      <td>20%</td>
                                                                      <td>65%</td>
                                                            </tr>
                                                            <tr className={styles.tbodyTrWrapper}>
                                                                      <td>Sales</td>
                                                                      <td>50%</td>
                                                                      <td>30%</td>
                                                                      <td>20%</td>
                                                                      <td>65%</td>
                                                            </tr>
                                                            <tr className={styles.tbodyTrWrapper}>
                                                                      <td>Development</td>
                                                                      <td>50%</td>
                                                                      <td>30%</td>
                                                                      <td>20%</td>
                                                                      <td>65%</td>
                                                            </tr>
                                                            <tr className={styles.tbodyTrWrapper}>
                                                                      <td>Operations</td>
                                                                      <td>50%</td>
                                                                      <td>30%</td>
                                                                      <td>20%</td>
                                                                      <td>65%</td>
                                                            </tr>
                                                  </tbody>
                                        </table>
                              </div>
                    </div>
          )
}

export default DetailedProgress