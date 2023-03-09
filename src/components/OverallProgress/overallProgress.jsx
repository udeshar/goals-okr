import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from './ovrprogress.module.css';
import clsx from 'clsx';
import Link from 'next/link';
import {FiTarget} from 'react-icons/fi'
import {BsFillBuildingsFill, BsFillPersonFill} from 'react-icons/bs'
import {MdGroups} from 'react-icons/md'

const progressData = [
          {
                    title : "Total objectives",
                    result : '160',
                    color : 'var(--redO)',
                    viewMore : true,
                    icon : FiTarget
          },
          {
                    title : "Company Progress",
                    result : '50%',
                    color : 'var(--greenO)',
                    viewMore : false,
                    icon : BsFillBuildingsFill
          },
          {
                    title : "Group Progress",
                    result : '80%',
                    color : 'var(--blueO)',
                    viewMore : false,
                    icon : MdGroups
          },
          {
                    title : "Individual Progress",
                    result : '60%',
                    color : 'var(--yellowO)',
                    viewMore : false,
                    icon : BsFillPersonFill
          },
]

export const ProgressCard = ({data, Icon}) => {
          return (
                    <div className={clsx(styles.progressCard, 'my-3')} >
                              <div className="d-flex">
                                        <div style={{backgroundColor : data.color}} className={clsx(styles.iconwrap, 'allcenter mt-1')} >
                                                  <Icon />
                                        </div>
                                        <div className="ms-3" >
                                                  <p><b className={styles.result} >{data.result}</b></p>
                                                  <p className={styles.title} >{data.title}</p>
                                                  <div className="mt-2" >{
                                                            data?.viewMore &&
                                                            <Link className="link"  href="#">See More</Link>
                                                  }
                                        </div>
                                        </div>
                              </div>
                              <div className={styles.borderLine} style={{backgroundColor : data.color}} ></div>
                    </div>
          )
}

const OverallProgress = () => {
          return (
                    <div>
                              <p className={styles.heading}>Overall Objective</p>
                              <Row>
                                        {
                                                  progressData.map((item,index)=>(
                                                            <Col lg={6} xl={3} xs={6} >
                                                                      <ProgressCard data={item} Icon={item.icon} />
                                                            </Col>
                                                  ))
                                        }
                              </Row>
                    </div>
          )
}

export default OverallProgress