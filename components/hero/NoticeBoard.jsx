import React, { useState } from 'react';
import styles from './NoticeBoard.module.css'; // Import the CSS module

const NoticeBoard = () => {
  const [notices, setNotices] = useState([
    "Notice 1: CBS College new semester starts on November 1.",
    "Notice 2: Applications for scholarships are now open.",
    "Notice 3: Join the Alumni meet on December 5.",
    "Notice 4: Final exams schedule will be released soon."
    // Add more notices here
  ]);

  return (
    <div className={styles.noticeBoard}>
      
      <div className={styles.noticeWrapper}>
        <div className={styles.noticeContainer}>
          {notices.map((notice, index) => (
            <div key={index}
            
            className={styles.noticeItem}>
              {notice}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
