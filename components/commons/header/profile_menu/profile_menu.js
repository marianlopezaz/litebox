import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import styles from './styles.module.scss';
import { useState } from 'react';
import LiteflixAvatar from '../../liteflix_avatar_component/liteflix_avatar_component';
import { Collapse } from '@material-ui/core';

const svgStyle = {
    position: 'absolute',
    right: '-13px'
}

const ProfileMenu = () => {

    const [moreOptions, setMoreOptions] = useState();

    const handleMoreOptions = () => {
        setMoreOptions(!moreOptions);
    }

    return (
        <>
            <div className={styles.container} onClick={handleMoreOptions}>
                <LiteflixAvatar iconColor='#4a90e2' iconWidth={15} />
                {!moreOptions ?
                    <KeyboardArrowDownIcon style={{ color: 'var(--white)' }} /> :
                    <KeyboardArrowUpIcon style={{ color: 'var(--white)' }} />}
            </div>

            <Collapse in={moreOptions} className={styles.collapse_container}>
                <div className={styles.top_adornment}></div>
                <ul className={styles.users_list}>
                    <li className={`${styles.users_list_item}`}>
                        <div>
                            <LiteflixAvatar
                                iconColor='#f5a623'
                                iconWidth={10}
                                containerColor='#ce00ff'
                                containerWidth={20}
                            />
                        </div>
                        <span className={styles.users_list_text}>Ernesto García</span>
                    </li>
                    <li className={`${styles.users_list_item}`}>
                        <div>
                            <LiteflixAvatar
                                iconColor='#4a4a4a'
                                iconWidth={10}
                                containerColor='#9b9b9b'
                                containerWidth={20}
                            />
                        </div>
                        <span className={styles.users_list_text}>User 02</span>
                    </li>

                    <li className={`${styles.users_list_item}`}>
                        <div>
                            <LiteflixAvatar
                                iconColor='#4a4a4a'
                                iconWidth={10}
                                containerColor='#9b9b9b'
                                containerWidth={20}
                            />
                        </div>
                        <span className={styles.users_list_text}>User 03</span>
                    </li>

                </ul>

                <ul className={styles.config_list}>
                    <li className={styles.config_list_item}>
                        Configuración
                    </li>
                    <li className={styles.config_list_item}>
                        Ayuda
                    </li>

                    <li className={styles.config_list_item}>
                        Log Out
                    </li>
                </ul>
            </Collapse>
        </>
    )

}

export default ProfileMenu;