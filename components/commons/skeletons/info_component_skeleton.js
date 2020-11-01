import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const InfoComponentSkeleton = () => {
    return (
        <SkeletonTheme color='#b9b9b9'  highlightColor="#a3a7aa">
            <Skeleton count={1} />
            <Skeleton count={1} height={100} />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center' }}>
                <Skeleton count={1} height={40} width={185}/> <Skeleton count={1} height={40} width={185}/>
            </div>
            <Skeleton count={1} />
            <Skeleton count={1} />
            <Skeleton count={1} />
            <Skeleton count={1} />
        </SkeletonTheme>
    )
}

export default InfoComponentSkeleton; 