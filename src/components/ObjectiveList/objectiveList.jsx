import React from 'react'
import { useState } from 'react';
import styles from './objectiveList.module.css'
import { BsChevronDown, BsDot } from 'react-icons/bs'
import Link from 'next/link';
import clsx from 'clsx';
import OkrModal from '../Modals/okrModal';

const OKRs = [
          {
                    objective: 'Increase website traffic',
                    description: 'Increase the number of unique visitors to our website by 25%',
                    keyResults: [
                              {
                                        title: 'Improve SEO',
                                        progress: 0.2,
                                        target: 0.5,
                              },
                              {
                                        title: 'Launch social media campaign',
                                        progress: 0.1,
                                        target: 0.3,
                              },
                              {
                                        title: 'Partner with influencers',
                                        progress: 0.0,
                                        target: 0.2,
                              }
                    ]
          },
          {
                    objective: 'Reduce customer churn',
                    description: 'Reduce the percentage of customers who cancel their subscription by 15%',
                    keyResults: [
                              {
                                        title: 'Improve customer support response time',
                                        progress: 0.3,
                                        target: 0.5,
                              },
                              {
                                        title: 'Launch loyalty program',
                                        progress: 0.0,
                                        target: 0.2,
                              },
                              {
                                        title: 'Improve product features based on customer feedback',
                                        progress: 0.1,
                                        target: 0.3,
                              }
                    ]
          },
          {
                    objective: 'Increase sales revenue',
                    description: 'Increase total sales revenue by 20%',
                    keyResults: [
                              {
                                        title: 'Launch new product line',
                                        progress: 0.1,
                                        target: 0.3,
                              },
                              {
                                        title: 'Improve checkout process',
                                        progress: 0.2,
                                        target: 0.5,
                              },
                              {
                                        title: 'Expand sales team',
                                        progress: 0.0,
                                        target: 0.2,
                              }
                    ]
          },
          {
                    objective: 'Improve customer satisfaction',
                    description: 'Increase customer satisfaction rating by 10%',
                    keyResults: [
                              {
                                        title: 'Reduce response time to customer inquiries',
                                        progress: 0.3,
                                        target: 0.5,
                              },
                              {
                                        title: 'Implement customer feedback program',
                                        progress: 0.1,
                                        target: 0.3,
                              },
                              {
                                        title: 'Improve product quality based on customer feedback',
                                        progress: 0.2,
                                        target: 0.4,
                              }
                    ]
          }
];

const SingleOkr = ({ onClick, item }) => {
          const [isOpen, setIsOpen] = useState(false);
          return (
                    <div className={styles.overallOkrWrapper}>
                              <div className={clsx(styles.okrWrapper, isOpen ? ' my-3' : ' mt-3')} >
                                        <div className={styles.okrtitle} >
                                                  <BsChevronDown role={"button"} onClick={() => setIsOpen(!isOpen)} />
                                                  <p className="ps-3" role="button" onClick={() => onClick(item)} >{item.objective}</p>
                                        </div>
                                        <div className='d-flex align-items-center' >
                                                  <Link href="#" className={styles.singleTeam + ' d-md-flex align-items-center linkWithNoStyles d-none'}>
                                                            <div style={{ backgroundColor: 'red' }} className={styles.teamIcon + " allcenter"} >
                                                                      <p>OP</p>
                                                            </div>
                                                            <p className={styles.smallText + " ps-1"} >Operations</p>
                                                  </Link>
                                                  <div className={styles.status + " " + styles.risk} >
                                                            <BsDot size={30} />
                                                            <p className={styles.smallText} >At Risk</p>
                                                  </div>
                                                  <div className={styles.progress + " d-none d-md-flex"} >
                                                            <p>20%</p>
                                                  </div>
                                        </div>
                              </div>

                              <div className={clsx(styles.keyResult, !isOpen && styles.noHeight, 'mx-2 ms-md-5')}>
                                        {
                                                  item?.keyResults.map((itemm, index) => (
                                                            <div className={styles.smallText + " ps-1 ps-md-4 py-2 d-flex justify-content-between align-items-md-center"}>
                                                                      <div className="d-flex align-items-center" >
                                                                                <BsDot size={30} />
                                                                                <p className={styles.keyText} >{itemm?.title}</p>
                                                                      </div>
                                                                      <div className={clsx('d-flex justify-content-between')}>
                                                                                <p>Mayuresh</p>
                                                                                <div className={clsx(styles.status, 'd-none d-md-flex')}>
                                                                                          <p>{itemm?.progress} / {itemm?.target}</p>
                                                                                </div>
                                                                                <p className='ms-2' style={{ color: 'var(--red)' }} >
                                                                                          50%
                                                                                </p>
                                                                      </div>
                                                            </div>
                                                  ))
                                        }
                                        {/* <div className={styles.smallText + " ps-1 ps-md-4 py-2 d-flex justify-content-between align-items-md-center"}>
                                                  <div className="d-flex align-items-center" >
                                                            <BsDot size={30} />
                                                            <p className={styles.keyText} >Increase brand value by 10%</p>
                                                  </div>
                                                  <div className={clsx('d-flex justify-content-between')}>
                                                            <p>Mayuresh</p>
                                                            <div className={clsx(styles.status, 'd-none d-md-flex')}>
                                                                      <p>95000 / 300000</p>
                                                            </div>
                                                            <p className='ms-2' style={{ color: 'var(--red)' }} >
                                                                      50%
                                                            </p>
                                                  </div>
                                        </div>
                                        <div className={styles.smallText + " ps-1 ps-md-4 py-2 d-flex justify-content-between align-items-md-center"}>
                                                  <div className="d-flex align-items-center" >
                                                            <BsDot size={30} />
                                                            <p className={styles.keyText} >Increase brand value by 10%</p>
                                                  </div>
                                                  <div className={clsx('d-flex justify-content-between')}>
                                                            <p>Mayuresh</p>
                                                            <div className={clsx(styles.status, 'd-none d-md-flex')}>
                                                                      <p>95000 / 300000</p>
                                                            </div>
                                                            <p className='ms-2' style={{ color: 'var(--red)' }} >
                                                                      50%
                                                            </p>
                                                  </div>
                                        </div> */}
                              </div>
                    </div>
          )
}


const ObjectiveList = () => {
          const [isModalOpen, setIsModalOpen] = useState(false);
          const [item, setItem] = useState({});
          return (
                    <div>
                              {
                                        OKRs.map((item, index) => (
                                                  <SingleOkr item={item} onClick={(item) => {
                                                            setItem(item);
                                                            setIsModalOpen(true);
                                                  }} />
                                        ))
                              }
                              <OkrModal show={isModalOpen} setShow={(value) => setIsModalOpen(value)} data={item} />
                    </div>
          )
}

export default ObjectiveList