import ProfileIcon from '../icons/profile_icon';
import styles from './styles.module.scss';

const LiteflixAvatar = ({iconColor,containerColor, iconWidth, containerWidth}) => {
    return (
        <div className={styles.avatar_container} style={{backgroundColor: containerColor, width:containerWidth, height:containerWidth}}>
            <ProfileIcon color={iconColor} width={iconWidth} />
        </div>
    )
}

export default LiteflixAvatar;