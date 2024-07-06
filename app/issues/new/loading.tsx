import { Skeleton } from '@/app/components'

const LoadingNewIssue = () => {
 
  return (
    <div>
      <Skeleton width={600} height={30} />
      <br />
      <Skeleton width={600} height={400}/>
      <Skeleton width={80} height={40}/>
    </div>
  )
}

export default LoadingNewIssue