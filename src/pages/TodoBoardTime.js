import { useState, useCallback } from "react";
import SettingCollumn from "../components/SettingCollumn";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./TodoBoardTime.module.css";

const TodoBoardTime = () => {
  const [isSettingCollumnOpen, setSettingCollumnOpen] = useState(false);
  const navigate = useNavigate();

  const openSettingCollumn = useCallback(() => {
    setSettingCollumnOpen(true);
  }, []);

  const closeSettingCollumn = useCallback(() => {
    setSettingCollumnOpen(false);
  }, []);

  const onProjectContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconButtonContainerClick = useCallback(() => {
    // Please sync "Dashboard / Nhân viên" to the project
  }, []);

  return (
    <>
      <div className={styles.todoBoardTime}>
        <div className={styles.todoBoardTimeInner}>
          <div className={styles.frameParent}>
            <div className={styles.headerParent}>
              <div className={styles.header}>
                <div className={styles.flow1Parent}>
                  <img className={styles.flow1Icon} alt="" src="/flow-1.svg" />
                  <div className={styles.avt}>
                    <div className={styles.userpic} />
                    <div className={styles.state} />
                    <div className={styles.label}>KA</div>
                  </div>
                  <div className={styles.overviewParent}>
                    <div className={styles.overview}>Việc cần làm</div>
                    <div className={styles.employees}>Employees</div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.memberParent}>
                    <div className={styles.member}>
                      <div className={styles.avt1}>
                        <div className={styles.userpic1} />
                        <div className={styles.state1} />
                        <div className={styles.label1}>KA</div>
                      </div>
                      <div className={styles.avt2}>
                        <div className={styles.userpic2} />
                        <div className={styles.state1} />
                        <div className={styles.label1}>NH</div>
                      </div>
                      <div className={styles.avt3}>
                        <div className={styles.userpic3} />
                        <div className={styles.state1} />
                        <div className={styles.label1}>HN</div>
                      </div>
                      <div className={styles.avt4}>
                        <img
                          className={styles.ovalCopy3}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.wrapper}>
                          <div className={styles.div}>+3</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.input}>
                      <div className={styles.usearchParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/usearch.svg"
                        />
                        <input
                          type="text"
                         placeholder="Search..."
                        value={this.state.searchTerm}
                       onChange={this.handleChange}
                       />
                      </div>
                      <img
                        className={styles.uangleDownIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.uplusWrapper}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uplus.svg"
                    />
                  </div>
                  <div className={styles.memberParent}>
                    <div className={styles.component2}>
                      <div className={styles.ucommentDotsWrapper}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/ucommentdots.svg"
                        />
                      </div>
                      <div className={styles.component2Child} />
                    </div>
                    <div className={styles.component2}>
                      <div className={styles.ucommentDotsWrapper}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/unotifiacation.svg"
                        />
                      </div>
                      <div className={styles.component2Child} />
                    </div>
                    <div className={styles.unsplashfgUd73uZmWrapper}>
                      <img
                        className={styles.unsplashfgUd73uZmIcon}
                        alt=""
                        src="/unsplashfg-ud73u-zm@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.filterParent}>
                  <div className={styles.filter}>
                    <div className={styles.ufilterParent}>
                      <img
                        className={styles.ufilterIcon}
                        alt=""
                        src="/ufilter.svg"
                      />
                      <div className={styles.bLc}>Bộ lọc</div>
                    </div>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                  <div className={styles.layout}>
                    <div className={styles.project}>
                      <div className={styles.ulistUiAltParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/ulistuialt.svg"
                        />
                        <div className={styles.bLc}>List</div>
                      </div>
                      <img
                        className={styles.downIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                        onClick={openSettingCollumn}
                      />
                    </div>
                    <div
                      className={styles.project1}
                      onClick={onProjectContainer1Click}
                    >
                      <div className={styles.ulistUiAltParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/uwebgridalt.svg"
                        />
                        <div className={styles.bLc}>Bảng</div>
                      </div>
                      <img
                        className={styles.downIcon1}
                        alt=""
                        src="/down.svg"
                      />
                    </div>
                    <div className={styles.project}>
                      <div className={styles.ulistUiAltParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/ucalendaralt.svg"
                        />
                        <div className={styles.bLc}>Lịch</div>
                      </div>
                      <img
                        className={styles.downIcon2}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.project}>
                      <div className={styles.ulistUiAltParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/usubject.svg"
                        />
                        <div className={styles.bLc}>Timeline</div>
                      </div>
                      <img
                        className={styles.downIcon2}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.time}>
                    <div className={styles.ufilterParent}>
                      <img
                        className={styles.uangleDoubleRightIcon}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                      <div className={styles.spXpTheoParent}>
                        <div className={styles.spXpTheo}>Việc hiển thị</div>
                        <div className={styles.employees}>Ngày hôm nay</div>
                      </div>
                    </div>
                    <img
                      className={styles.uangleDownIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.frameParent2}>
                    <div className={styles.ufilterParent}>
                      <div className={styles.vicCnLm}>Việc cần làm</div>
                      <div className={styles.container}>
                        <div className={styles.vicCnLm}>05</div>
                      </div>
                    </div>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uplus1.svg"
                    />
                  </div>
                  <div className={styles.workBoardParent}>
                    <div className={styles.workBoard}>
                      <div className={styles.progressParent}>
                        <img
                          className={styles.ufilterIcon}
                          alt=""
                          src="/progress.svg"
                        />
                        <div className={styles.taskname}>
                          Thiết kế giao diện làm việc của E-Work
                        </div>
                      </div>
                      <div className={styles.workBoardChild} />
                      <div className={styles.frameParent3}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/priority.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/uuser.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/ucalendaralt1.svg"
                          />
                        </div>
                        <div className={styles.tag}>
                          <div className={styles.div}>E-Work</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.workBoard}>
                      <div className={styles.progressParent}>
                        <img
                          className={styles.ufilterIcon}
                          alt=""
                          src="/progress.svg"
                        />
                        <div className={styles.taskname}>
                          Thiết kế giao diện làm việc của E-Work
                        </div>
                      </div>
                      <div className={styles.workBoardChild} />
                      <div className={styles.frameParent3}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/priority1.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/uuser.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/ucalendaralt1.svg"
                          />
                        </div>
                        <div className={styles.tag}>
                          <div className={styles.div}>E-Work</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.workBoard}>
                      <div className={styles.progressParent}>
                        <img
                          className={styles.ufilterIcon}
                          alt=""
                          src="/progress.svg"
                        />
                        <div className={styles.taskname}>
                          Thiết kế giao diện làm việc của E-Work
                        </div>
                      </div>
                      <div className={styles.workBoardChild} />
                      <div className={styles.frameParent3}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/priority1.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/uuser.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/ucalendaralt1.svg"
                          />
                        </div>
                        <div className={styles.tag}>
                          <div className={styles.div}>E-Work</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.workBoard}>
                      <div className={styles.progressParent}>
                        <img
                          className={styles.ufilterIcon}
                          alt=""
                          src="/progress.svg"
                        />
                        <div className={styles.taskname}>
                          Thiết kế giao diện công tác viên của Mobishop
                        </div>
                      </div>
                      <div className={styles.workBoardChild} />
                      <div className={styles.frameParent3}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/priority1.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/uuser.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/ucalendaralt1.svg"
                          />
                        </div>
                        <div className={styles.tag}>
                          <div className={styles.div}>Mobishop</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.workBoard}>
                      <div className={styles.progressParent}>
                        <img
                          className={styles.ufilterIcon}
                          alt=""
                          src="/progress.svg"
                        />
                        <div className={styles.taskname}>
                          Thêm hướng dẫn thanh toán ở trang thanh toán
                        </div>
                      </div>
                      <div className={styles.workBoardChild} />
                      <div className={styles.frameParent3}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/priority1.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/uuser.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/ucalendaralt1.svg"
                          />
                        </div>
                        <div className={styles.tag}>
                          <div className={styles.div}>Lixil Ecommerce</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent8}>
                  <div className={styles.frameParent2}>
                    <div className={styles.ufilterParent}>
                      <div className={styles.lmR}>Làm rõ</div>
                      <div className={styles.frame}>
                        <div className={styles.vicCnLm}>02</div>
                      </div>
                    </div>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uplus1.svg"
                    />
                  </div>
                  <div className={styles.workBoardParent}>
                    <div className={styles.workBoard}>
                      <div className={styles.progressParent}>
                        <img
                          className={styles.ufilterIcon}
                          alt=""
                          src="/progress1.svg"
                        />
                        <div className={styles.taskname}>
                          Thiết kế giao diện làm việc của E-Work
                        </div>
                      </div>
                      <div className={styles.workBoardChild} />
                      <div className={styles.frameParent3}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/priority.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/uuser.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/ucalendaralt1.svg"
                          />
                        </div>
                        <div className={styles.tag}>
                          <div className={styles.div}>E-Work</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.workBoard}>
                      <div className={styles.progressParent}>
                        <img
                          className={styles.ufilterIcon}
                          alt=""
                          src="/progress1.svg"
                        />
                        <div className={styles.taskname}>
                          Thiết kế giao diện làm việc của E-Work
                        </div>
                      </div>
                      <div className={styles.workBoardChild} />
                      <div className={styles.frameParent3}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/priority.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/uuser.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/ucalendaralt1.svg"
                          />
                        </div>
                        <div className={styles.tag}>
                          <div className={styles.div}>E-Work</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.frameParent2}>
                    <div className={styles.ufilterParent}>
                      <div className={styles.angThcHin}>Đang thực hiện</div>
                      <div className={styles.frame}>
                        <div className={styles.vicCnLm}>0</div>
                      </div>
                    </div>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uplus1.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameParent8}>
                  <div className={styles.frameParent2}>
                    <div className={styles.ufilterParent}>
                      <div className={styles.chKimTra}>Chờ kiểm tra</div>
                      <div className={styles.frame}>
                        <div className={styles.vicCnLm}>04</div>
                      </div>
                    </div>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uplus2.svg"
                    />
                  </div>
                  <div className={styles.workBoardParent}>
                    <div className={styles.workBoard}>
                      <div className={styles.progressParent}>
                        <img
                          className={styles.priorityIcon}
                          alt=""
                          src="/progress2.svg"
                        />
                        <div className={styles.taskname}>
                          Thiết kế giao diện làm việc của E-Work
                        </div>
                      </div>
                      <div className={styles.workBoardChild} />
                      <div className={styles.frameParent3}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/priority.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/uuser.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/ucalendaralt1.svg"
                          />
                        </div>
                        <div className={styles.tag}>
                          <div className={styles.div}>E-Work</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.workBoard}>
                      <div className={styles.progressParent}>
                        <img
                          className={styles.priorityIcon}
                          alt=""
                          src="/progress2.svg"
                        />
                        <div className={styles.taskname}>
                          Thiết kế giao diện làm việc của E-Work
                        </div>
                      </div>
                      <div className={styles.workBoardChild} />
                      <div className={styles.frameParent3}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/priority.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/uuser.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/ucalendaralt1.svg"
                          />
                        </div>
                        <div className={styles.tag}>
                          <div className={styles.div}>E-Work</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.workBoard}>
                      <div className={styles.progressParent}>
                        <img
                          className={styles.priorityIcon}
                          alt=""
                          src="/progress2.svg"
                        />
                        <div className={styles.taskname}>
                          Thiết kế giao diện làm việc của E-Work
                        </div>
                      </div>
                      <div className={styles.workBoardChild} />
                      <div className={styles.frameParent3}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/priority1.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/uuser.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/ucalendaralt1.svg"
                          />
                        </div>
                        <div className={styles.tag}>
                          <div className={styles.div}>E-Work</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.workBoard}>
                      <div className={styles.progressParent}>
                        <img
                          className={styles.priorityIcon}
                          alt=""
                          src="/progress2.svg"
                        />
                        <div className={styles.taskname}>
                          Thiết kế giao diện làm việc của E-Work
                        </div>
                      </div>
                      <div className={styles.workBoardChild} />
                      <div className={styles.frameParent3}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/priority1.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/uuser.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/ucalendaralt1.svg"
                          />
                        </div>
                        <div className={styles.tag}>
                          <div className={styles.div}>E-Work</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent8}>
                  <div className={styles.frameParent2}>
                    <div className={styles.ufilterParent}>
                      <div className={styles.honThnh}>Hoàn thành</div>
                      <div className={styles.frame}>
                        <div className={styles.vicCnLm}>05</div>
                      </div>
                    </div>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                  </div>
                  <div className={styles.workBoardParent}>
                    <div className={styles.workBoard}>
                      <div className={styles.progressParent}>
                        <img
                          className={styles.priorityIcon}
                          alt=""
                          src="/check-box.svg"
                        />
                        <div className={styles.taskname}>
                          Thiết kế giao diện cho cộng tác viên
                        </div>
                      </div>
                      <div className={styles.workBoardChild} />
                      <div className={styles.frameParent3}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/priority.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                        </div>
                        <div className={styles.tag}>
                          <div className={styles.div}>Lixil Ecommerce</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.workBoard}>
                      <div className={styles.progressParent}>
                        <img
                          className={styles.priorityIcon}
                          alt=""
                          src="/check-box.svg"
                        />
                        <div className={styles.taskname}>
                          Thiết kế trang chủ và trang chi tiết sản phẩm
                        </div>
                      </div>
                      <div className={styles.workBoardChild} />
                      <div className={styles.frameParent3}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/priority1.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                        </div>
                        <div className={styles.tag}>
                          <div className={styles.div}>Lixil Ecommerce</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.workBoard}>
                      <div className={styles.progressParent}>
                        <img
                          className={styles.priorityIcon}
                          alt=""
                          src="/check-box.svg"
                        />
                        <div className={styles.taskname}>
                          Thiết kế catelog và trang giỏ hàng
                        </div>
                      </div>
                      <div className={styles.workBoardChild} />
                      <div className={styles.frameParent3}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/priority1.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                        </div>
                        <div className={styles.tag}>
                          <div className={styles.div}>Lixil Ecommerce</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.workBoard}>
                      <div className={styles.progressParent}>
                        <img
                          className={styles.priorityIcon}
                          alt=""
                          src="/check-box.svg"
                        />
                        <div className={styles.taskname}>
                          Thiết kế các màn đăng ký đăng nhập
                        </div>
                      </div>
                      <div className={styles.workBoardChild} />
                      <div className={styles.frameParent3}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/priority1.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                        </div>
                        <div className={styles.tag}>
                          <div className={styles.div}>Lixil Ecommerce</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.workBoard}>
                      <div className={styles.progressParent}>
                        <img
                          className={styles.priorityIcon}
                          alt=""
                          src="/check-box.svg"
                        />
                        <div className={styles.taskname}>
                          Thiết kế các màn đăng ký đăng nhập
                        </div>
                      </div>
                      <div className={styles.workBoardChild} />
                      <div className={styles.frameParent3}>
                        <div className={styles.ulistUiAltParent}>
                          <img
                            className={styles.priorityIcon}
                            alt=""
                            src="/priority1.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <img
                            className={styles.ufilterIcon}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                        </div>
                        <div className={styles.tag}>
                          <div className={styles.div}>Lixil Ecommerce</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuMini}>
            <div className={styles.frameParent26}>
              <div className={styles.uangleDoubleRightWrapper}>
                <img
                  className={styles.uangleDoubleRightIcon}
                  alt=""
                  src="/uangledoubleright.svg"
                />
              </div>
              <div className={styles.iconButtonParent}>
                <div
                  className={styles.iconButton}
                  onClick={onIconButtonContainerClick}
                >
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/uhomealt.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/ulistul.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/usuitcase.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/ufilemedicalalt.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/usitemap.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/uusersalt.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.uangleDoubleRightWrapper}>
              <img
                className={styles.uangleDoubleRightIcon}
                alt=""
                src="/usetting.svg"
              />
            </div>
          </div>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" src="/rectangle-1.svg" />
            <div className={styles.image1Parent}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
              <div className={styles.trangChParent}>
                <div className={styles.overview}>Trang chủ</div>
                <div className={styles.mennuParent}>
                  <div className={styles.mennu}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/ucreatedashboard.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.taskname}>Dashboard</div>
                    </div>
                    <img
                      className={styles.uangleRightIcon1}
                      alt=""
                      src="/uangleright1.svg"
                    />
                  </div>
                  <div className={styles.mennuGroup}>
                    <div className={styles.mennu1}>
                      <img
                        className={styles.uangleRightIcon1}
                        alt=""
                        src="/ulistuialt1.svg"
                      />
                      <div className={styles.hmNayWrapper}>
                        <div className={styles.taskname}>Việc của tôi</div>
                      </div>
                      <img
                        className={styles.uangleRightIcon1}
                        alt=""
                        src="/uangleright2.svg"
                      />
                    </div>
                    <div className={styles.frameParent27}>
                      <div className={styles.downParent}>
                        <img
                          className={styles.downIcon4}
                          alt=""
                          src="/down1.svg"
                        />
                        <div className={styles.ufilterParent}>
                          <div className={styles.vicCnLm}>Dự án</div>
                          <div className={styles.container}>
                            <div className={styles.vicCnLm}>06</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent28}>
                        <div className={styles.menuFilterParent}>
                          <div className={styles.menuFilter}>
                            <div className={styles.usearchParent}>
                              <img
                                className={styles.ulistUiAltIcon2}
                                alt=""
                                src="/ulistuialt2.svg"
                              />
                              <div className={styles.search}>E-Work</div>
                            </div>
                            <div className={styles.wrapper5}>
                              <div className={styles.vicCnLm}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.usearchParent}>
                              <img
                                className={styles.ulistUiAltIcon2}
                                alt=""
                                src="/ulistuialt2.svg"
                              />
                              <div className={styles.search}>CEO Loyalty</div>
                            </div>
                            <div className={styles.wrapper5}>
                              <div className={styles.vicCnLm}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.usearchParent}>
                              <img
                                className={styles.ulistUiAltIcon2}
                                alt=""
                                src="/ulistuialt2.svg"
                              />
                              <div className={styles.search}>Mobishop</div>
                            </div>
                            <div className={styles.wrapper5}>
                              <div className={styles.vicCnLm}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.usearchParent}>
                              <img
                                className={styles.ulistUiAltIcon2}
                                alt=""
                                src="/ulistuialt2.svg"
                              />
                              <div className={styles.search}>
                                Lixil Ecommerce
                              </div>
                            </div>
                            <div className={styles.wrapper5}>
                              <div className={styles.vicCnLm}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.usearchParent}>
                              <img
                                className={styles.ulistUiAltIcon2}
                                alt=""
                                src="/ulistuialt2.svg"
                              />
                              <div className={styles.search}>
                                Travel Booking
                              </div>
                            </div>
                            <div className={styles.wrapper5}>
                              <div className={styles.vicCnLm}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.usearchParent}>
                              <img
                                className={styles.ulistUiAltIcon2}
                                alt=""
                                src="/ulistuialt2.svg"
                              />
                              <div className={styles.search}>Golf Manage</div>
                            </div>
                            <div className={styles.wrapper5}>
                              <div className={styles.vicCnLm}>06</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameWrapper2}>
                          <div className={styles.uplusParent}>
                            <img
                              className={styles.ulistUiAltIcon2}
                              alt=""
                              src="/uplus3.svg"
                            />
                            <div className={styles.bLc}>Tạo dự án mới</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.downParent}>
                      <img
                        className={styles.downIcon4}
                        alt=""
                        src="/down2.svg"
                      />
                      <div className={styles.ufilterParent}>
                        <div className={styles.vicCnLm}>Tiến độ</div>
                        <div className={styles.wrapper11}>
                          <div className={styles.vicCnLm}>06</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent27}>
                      <div className={styles.downParent}>
                        <img
                          className={styles.downIcon4}
                          alt=""
                          src="/down1.svg"
                        />
                        <div className={styles.ufilterParent}>
                          <div className={styles.vicCnLm}>Việc đơn vị</div>
                          <div className={styles.wrapper5}>
                            <div className={styles.vicCnLm}>06</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper3}>
                        <div className={styles.menuFilterParent}>
                          <div className={styles.menuFilter}>
                            <div className={styles.usearchParent}>
                              <img
                                className={styles.ulistUiAltIcon2}
                                alt=""
                                src="/ulistuialt2.svg"
                              />
                              <div className={styles.search}>Giao</div>
                            </div>
                            <div className={styles.wrapper5}>
                              <div className={styles.vicCnLm}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.usearchParent}>
                              <img
                                className={styles.ulistUiAltIcon2}
                                alt=""
                                src="/ulistuialt2.svg"
                              />
                              <div className={styles.search}>Được giao</div>
                            </div>
                            <div className={styles.wrapper5}>
                              <div className={styles.vicCnLm}>06</div>
                            </div>
                          </div>
                          <div className={styles.menuFilter}>
                            <div className={styles.usearchParent}>
                              <img
                                className={styles.ulistUiAltIcon2}
                                alt=""
                                src="/ulistuialt2.svg"
                              />
                              <div className={styles.search}>Theo dõi</div>
                            </div>
                            <div className={styles.wrapper5}>
                              <div className={styles.vicCnLm}>06</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.mennu}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uchartline.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.taskname}>Báo cáo</div>
                    </div>
                    <img
                      className={styles.uangleRightIcon1}
                      alt=""
                      src="/uangleright1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSettingCollumnOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSettingCollumn}
        >
          <SettingCollumn onClose={closeSettingCollumn} />
        </PortalPopup>
      )}
    </>
  );
};

export default TodoBoardTime;
