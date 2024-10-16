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
      <div style={
        {
          height:'100%',
          width:'100%',
          overflow:'hidden',
          
        }
      }>
        <h4
        style={
          {
            backgroundColor:'rgba(255, 255, 255, 0.6)',
            textAlign:'center',
            borderRadius:'20px 20px 0 0',
            padding:5,
            
          }
        }
        
        >Notice Board</h4>
        <div
         style={
          {
            
            height:'300px'
          }
        } className={styles.noticeWrapper}>
          <div
          
          className={styles.noticeContainer} >
            {notices.map((notice, index) => (
              <div key={index}

                className={styles.noticeItem}>
                {notice}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
