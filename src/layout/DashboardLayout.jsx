import Sidebar from "@/components/Sidebar/sidebar";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import styles from "./DashboardLayout.module.css"
import Drawer from 'react-modern-drawer'
import InviteStatusModal from "@/components/Modals/InviteStatusModal";
import useBoundStore from "@/store";
import { getMyInvites } from '@/services/api'
import { useQuery } from 'react-query'
// import { useState } from "react";

const DashboardLayout = ({ children, screen, breadcrumb }) => {
          const { drawerOpened, toggleDrawer, setMyInvites } = useBoundStore((state) => ({
                    drawerOpened: state.drawerOpened,
                    toggleDrawer: state.toggleDrawer,
                    setMyInvites: state.setMyInvites
          }))
          // const [show, setShow] = useState(true);

          const { data: inviteData = [], isLoading: inviteLoading, refetch: getInviteRefetch } = useQuery('getMyInvites', () => getMyInvites(), {
                    enabled: false,
                    onSuccess: (data = []) => {
                              setMyInvites(data)
                    }
          });

          const setShowInviteModal = useBoundStore((state) => state.setShowInviteModal)
          const showInviteModal = useBoundStore((state) => state.showInviteModal)
          const myInvites = useBoundStore((state) => state.myInvites)

          return (
                    <div className={styles.layout + ' d-flex'}>
                              {
                                        myInvites.length > 0 &&
                                        <InviteStatusModal show={showInviteModal} setShow={setShowInviteModal} invtes={myInvites} cb={() => getInviteRefetch()} />
                              }
                              <Sidebar className={styles.sidbar} screen={screen} />
                              <Drawer
                                        open={drawerOpened}
                                        onClose={() => toggleDrawer()}
                                        direction='left'
                                        className='okr_drawer'
                              >
                                        <Sidebar screen={screen} />
                              </Drawer>
                              <div className={styles.middle} >
                                        <div className={styles.middleContent} >
                                                  <Navbar screen={screen} breadcrumb={breadcrumb} />
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