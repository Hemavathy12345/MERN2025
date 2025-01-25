import { lazy,Suspense } from 'react'
const LazyComponent=lazy(()=>import('../About'))
const LasyloadingWithsuspense=()=>{
    return(
        <div>
            <Suspense fallback={<h1>Loading...</h1>}>
            <h1>This is a lazy loading example</h1>
            <LazyComponent/>
            </Suspense>
        </div>
    )
}
export default LasyloadingWithsuspense