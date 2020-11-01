import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styles from './styles.module.scss';

const UpcomingSkeleton = ({ mobileStyle }) => {
    return (
        !mobileStyle ?
            <SkeletonTheme color='#b9b9b9' highlightColor="#a3a7aa">
                <div style={{ display: 'flex' }}>
                    <Skeleton count={1} width={275} height={275} style={{ marginLeft: '10px' }} />
                    <Skeleton count={1} width={275} height={275} style={{ marginLeft: '10px' }} />
                    <Skeleton count={1} width={275} height={275} style={{ marginLeft: '10px' }} />
                    <Skeleton count={1} width={275} height={275} style={{ marginLeft: '10px' }} />
                </div>
            </SkeletonTheme >

            :
            <SkeletonTheme color='#b9b9b9' highlightColor="#a3a7aa" >
                <Skeleton count={1} width={'100vh'} height={400} />
            </SkeletonTheme >
    )
}

export default UpcomingSkeleton;