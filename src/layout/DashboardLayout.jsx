import Sidebar from "@/components/Sidebar/sidebar";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import styles from "./DashboardLayout.module.css"

const DashboardLayout = ({children}) => {
          return(
                    <div className={styles.layout + ' d-flex'}>
                              <Sidebar />
                              <div className={styles.middle} >
                                        <div className={styles.middleContent} >
                                                  <Navbar screen="Dashboard" />
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