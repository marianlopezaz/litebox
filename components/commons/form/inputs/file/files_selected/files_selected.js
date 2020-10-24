// Import dependencies
import { Row, Col, Collapse } from "react-bootstrap";
import CancelIcon from '@material-ui/icons/Cancel';

// Import components
import styles from "./styles.module.scss";
import { useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Change styles in ./styles.module.scss file
 */
const FilesSelected = ({ state, input, deleteFile }) => {
  const handleDeleteFile = (file) => {
    deleteFile(file);
  }

  useEffect(() => {
    let previewEl = document.getElementById(`media_img_preview`);
    if (previewEl) previewEl.src = window.URL.createObjectURL(state['media'][0]);
  }, []);

  return (
    <Row lg={12} md={12} sm={12} xs={12}>
      <Col
        className="left"
        lg={12}
        md={12}
        sm={12}
        xs={12}
        styles={{ padding: 0 }}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Collapse in={state[input.name]}>
            {state[input.name] && state[input.name].length > 1 ? (
              <>
                {state[input.name].map((file) => (
                  <div className={styles.preview_photo}>
                    <div className={styles.photo_container}>
                      <img
                        src="/icons/multiples_files.svg"
                        alt="img-preview"
                        className={styles.defaul_img}
                      />
                      <div className={styles.file_detail}>
                        <p>{file.name}</p>
                        <p>
                          {Math.round(file.size / (1024 * 1024))}
                          <strong> MB</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
                <div className={styles.preview_photo}>
                  <div className={styles.photo_container}>
                    <div className={styles.delete_container} onClick={() => handleDeleteFile(state[input.name][0])}>
                      <CancelIcon style={{ color: 'var(--red)' }} />
                    </div>
                    <img
                      src="#"
                      id={`${input.name}_img_preview`}
                      alt="img-preview"
                      className={styles.selected_img}
                    />
                    {state[input.name][0] && (
                      <div className={styles.file_detail}>
                        <p>{state[input.name][0].name}</p>
                        <p>
                          {Math.round(state[input.name][0].size / (1024 * 1024))}
                          <strong> MB</strong>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
          </Collapse>
        </motion.div>
      </Col>
    </Row>
  );
};

export default FilesSelected;
