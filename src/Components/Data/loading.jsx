import { Card, Skeleton } from 'antd';
const { Meta } = Card;
export default function Loading ({loading}){
 
  return ( 
    <Card
    style={{
      width: "100%",
      marginTop: 16,
    }}
  >
    <Skeleton loading  active>
      <Meta
        title="Card title"
        description="This is the description"
      />
    </Skeleton>
  </Card>
  )}