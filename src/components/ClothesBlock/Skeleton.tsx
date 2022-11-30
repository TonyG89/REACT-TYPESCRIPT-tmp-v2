import React from "react"
import ContentLoader from "react-content-loader"

 const Skeleton = (props) => (
  <ContentLoader 
    speed={1}
    width={280}
    height={500}
    viewBox="0 0 280 505"
    backgroundColor="#f3f3f3"
    foregroundColor="#fcbb97"
    {...props}
  >
    <rect x="30" y="20" rx="10" ry="10" width="240" height="300" />
    <rect x="50" y="325" rx="10" ry="10" width="180" height="32" /> 
    <rect x="0" y="365" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="466" rx="10" ry="10" width="95" height="35" /> 
    <rect x="125" y="461" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton