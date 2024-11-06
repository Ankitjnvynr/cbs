import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// Dynamically import the Quill editor for client-side rendering
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CreateNoticeForm = ({ onClose, editNotice }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalTitle, setModalTitle] = useState("Create");
  const [editing, setEditing] = useState(false);
  const [editNoticeId, setEditNoticeId] = useState(null);

  const MAX_TITLE_LENGTH = 80;
  const MAX_CONTENT_LENGTH = 2000;

  // Initialize form values if editing a notice
  useEffect(() => {
    if (Object.keys(editNotice).length === 0) {
      setModalTitle("Create New");
    } else {
      setModalTitle("Update");
      setEditNoticeId(editNotice.notice_id);
      setTitle(editNotice.title);
      setContent(editNotice.content);
      setExpirationDate(editNotice.expirationDate);
      setEditing(true);
    }
  }, [editNotice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title || !content) {
      setError("Please fill in all required fields.");
      return;
    }

    const noticeData = {
      id: editing ? editNoticeId : null, // Include id in the body if updating
      title,
      content,
      expiration_date: expirationDate,
    };

    try {
      //console.table(noticeData);

      setIsLoading(true);
      const response = await fetch("/api/notices", {
        method: editing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(noticeData),
      });

      // Check if the response is okay
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData?.message ||
            `Failed to ${editing ? "update" : "create"} notice`
        );
      }

      const data = await response.json();
      alert(data.message);
      router.push("/dashboard");
    } catch (error) {
      // Display error message if the request fails
      setError(error.message || "An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h4>{modalTitle} Notice</h4>
      <form onSubmit={handleSubmit} style={styles.form}>
        {error && <p style={styles.errorText}>{error}</p>}
        <div style={styles.fieldContainer}>
          <div style={styles.sideFields}>
            <label style={styles.label}>
              <span style={styles.labelText}>Title</span>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  if (e.target.value.length <= MAX_TITLE_LENGTH) {
                    setTitle(e.target.value);
                  }
                }}
                style={styles.input}
                required
              />
              <span style={styles.charCount}>
                {title.length}/{MAX_TITLE_LENGTH}
              </span>
            </label>
            <label style={styles.label}>
              <span style={styles.labelText}>Expiration Date</span>
              <input
                type="date"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                style={styles.input}
              />
            </label>
            <div style={styles.buttonContainer}>
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  ...styles.button,
                  ...(isLoading ? styles.loadingButton : {}),
                }}
              >
                {isLoading
                  ? editing
                    ? "Updating..."
                    : "Adding..."
                  : editing
                  ? "Update Notice"
                  : "Add Notice"}
              </button>
            </div>
          </div>

          <div style={styles.contentField}>
            <label style={styles.label}>
              <span style={styles.labelText}>Content</span>
              <ReactQuill
                value={content}
                onChange={(value) => {
                  if (value.length <= MAX_CONTENT_LENGTH) {
                    setContent(value);
                  }
                }}
                style={styles.richTextEditor}
              />
              <span style={styles.charCount}>
                {content.length}/{MAX_CONTENT_LENGTH}
              </span>
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateNoticeForm;

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: "1rem",
  },
  fieldContainer: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
  sideFields: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    flex: "1 0 20%",
  },
  contentField: {
    flex: "1 0 48%",
    display: "flex",
    flexDirection: "column",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  labelText: {
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#333",
  },
  input: {
    padding: "0.5rem",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "0.375rem",
    outline: "none",
    transition: "border-color 0.2s",
  },
  richTextEditor: {
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "0.375rem",
    minHeight: "12rem",
    maxHeight: "20rem",
    padding: "0.5rem",
  },
  charCount: {
    fontSize: "0.75rem",
    color: "#666",
    marginTop: "0.25rem",
    alignSelf: "flex-end",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "1rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "0.375rem",
    fontWeight: "600",
    fontSize: "1rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s",
    outline: "none",
  },
  loadingButton: {
    backgroundColor: "#0056b3",
    cursor: "not-allowed",
  },
};
