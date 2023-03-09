import Sidebar from "@/components/Sidebar/sidebar";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import styles from "./DashboardLayout.module.css"
import Drawer from 'react-modern-drawer'
import useBoundStore from "@/store";

const DashboardLayout = ({children, screen}) => {
          const {drawerOpened,toggleDrawer} = useBoundStore((state) => ({
                    drawerOpened : state.drawerOpened, 
                    toggleDrawer : state.toggleDrawer
          }))
          return(
                    <div className={styles.layout + ' d-flex'}>
                              <Sidebar className={styles.sidbar} screen={screen}  />
                              <Drawer
                                        open={drawerOpened}
                                        onClose={()=>toggleDrawer()}
                                        direction='left'
                                        className='okr_drawer'
                              >
                                        <Sidebar  screen={screen}  />
                              </Drawer>
                              <div className={styles.middle} >
                                        <div className={styles.middleContent} >
                                                  <Navbar screen={screen} />
                                                            <div className={styles.content} >
                                                                      {children}
                                                            </div>
                                                  <Footer />
                                        </div>
                              </div>
                    </div>
          )
}

export default DashboardLayout;