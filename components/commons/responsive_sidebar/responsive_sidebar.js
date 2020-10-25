import React, { useState, useEffect } from "react";

/* Dependencies Imports */
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from '@material-ui/icons/Menu';
import styles from './styles.module.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

/** General modal structure thats receives title, body and button to open by props.
 * @param {string} title - Title to show as modal title
 * @param {any} button - Html button or component to show to open modal
 * @param {any} body - Html element or component to render as body of modal
 * @param {boolean} disableBackdrop - attribute to disable click and close on modal backdrop click
 * Usage Ex:
 *   <Modal
 *    title="Agregar usuario"
 *    body = {<ModalForm props />}
 *    button= {<button>Agregar Usuario</button>}
 *    />
 */

const ResponsiveSidebar = ({ title, body, button, disableBackdrop }) => {
  const newBody = { ...body };
  const [show, setShow] = useState(false);

  const handleVisibilityModal = () => {
    setShow(!show);
  };

  useEffect(() => {
    newBody.props = { ...body.props, closeModal: handleVisibilityModal };
  });

  return (
    <>
      <Dialog
        open={show}
        onClose={!disableBackdrop ? handleVisibilityModal : null}
        fullScreen
        maxWidth="lg"
        className="responsive_sidebar center"
        TransitionComponent={Transition}
      >
        <div
          onClick={handleVisibilityModal}
          className="close_sidebar"
        >
          <MenuIcon className={styles.menu_icon} />
        </div>
        <DialogTitle>
          {title}
        </DialogTitle>
        <DialogContent>
          <div>{newBody}</div>
        </DialogContent>
      </Dialog>
      <span onClick={handleVisibilityModal}>{button}</span>
    </>
  );
};

export default ResponsiveSidebar;
