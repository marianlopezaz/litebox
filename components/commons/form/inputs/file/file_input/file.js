import { motion } from "framer-motion";
import React, { createRef } from "react";

// Import dependencies
import styles from "./styles.module.scss";

/**
 * Recieves the input and de handler on file selection
 * Change select area and input style in ./styles.module.scss file
 */
const InputFile = ({ onFilesAdded, input }) => {
  const inputRef = createRef();

  const openFileDialog = () => {
    if (input.fileAreaDisabled) return;
    inputRef.current.click();
  };

  const uploadFile = (event) => {
    if (input.fileAreaDisabled) return;
    if (onFilesAdded) {
      onFilesAdded(input.name, input.fileAcceptMultiple, event.target.files);
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={styles.drop_zone}
        style={
          input.fileAreaDisabled
            ? { cursor: "default", opacity: "0.5" }
            : { cursor: "pointer" }
        }
        onClick={!input.fileAreaDisabled ? openFileDialog : undefined}
      >
        <span className={styles.text_container}>
          <span> <img src='/images/clip.svg' className={styles.clip_image}/> <span className={styles.bold_text}>Agregar archivo </span> o arrastrarlo y soltarlo aquí </span> 
        </span>
        
        <input
          ref={inputRef}
          className={styles.file_input}
          type="file"
          multiple={!!input.fileAcceptMultiple}
          onChange={uploadFile}
          accept={input.fileType ? input.fileType : "image/*"}
          onClick={(e) => { e.target.value = null }}
        />
      </div>
    </motion.div>
  );
};

export default InputFile;
