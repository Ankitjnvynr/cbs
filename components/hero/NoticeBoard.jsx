import React, { useEffect, useState } from "react";
import styles from "./NoticeBoard.module.css"; // Import the CSS module
import { FaLocationArrow } from "react-icons/fa";
import { Rotate } from "react-awesome-reveal";
import Link from "next/link";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([
    "Notice 1: CBS College new semester starts on November 1.",
    "Notice 2: Applications for scholarships are now open.",
    "Notice 3: Join the Alumni meet on December 5.",
    "Notice 4: Final exams schedule will be released soon.",
    // Add more notices here
  ]);

  const allNotices = async () => {
    try {
      const response = await fetch("/api/notices");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      
      setNotices(data.data);

      //setNotices(data.data);
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  useEffect(() => {
    allNotices(); // Fetch notices when the component mounts
  }, []);

  return (
    <div className={styles.noticeBoard}>
      <div
        style={{
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <h4
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            textAlign: "center",
            borderRadius: "20px 20px 0 0",
            padding: 5,
          }}
        >
          Notice Board
        </h4>
        <div
          style={{
            height: "300px",
          }}
          className={styles.noticeWrapper}
        >
          <div className={styles.noticeContainer
            
          }
          
          >
            {notices.map((notice, index) => (
              <div key={notice.notice_id} style={{textAlign:'left'}} className={styles.noticeItem}>
               <span style={{
                color: 'yellow',
                transform: 'rotate(45deg)',
                display: 'inline-block', // Ensure the span takes only the space of its content
                marginRight: '15px', // Add some space between the icon and title
              }}>
                <FaLocationArrow /> 
              </span>
              <Link
              style={{
                color:'white'
              }}
              href={`/notice/${notice.notice_id}`}>
                { notice.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
