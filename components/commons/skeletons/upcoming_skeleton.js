import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const UpcomingSkeleton = () => {
    return (
        <SkeletonTheme color='#b9b9b9'  highlightColor="#a3a7aa">
            <Skeleton count={1} width={275} height={275} style={{marginLeft:'10px'}}/>
            <Skeleton count={1} width={275} height={275}  style={{marginLeft:'10px'}}/>
            <Skeleton count={1} width={275} height={275}  style={{marginLeft:'10px'}}/>
            <Skeleton count={1} width={275} height={275}  style={{marginLeft:'10px'}}/>
        </SkeletonTheme>
    )
}

export default UpcomingSkeleton;