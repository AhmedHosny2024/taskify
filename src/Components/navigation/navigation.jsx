import { Button, Space } from 'antd'
import { Container, SearchBar, Title } from './style'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { IconButton } from '@mui/material';

export default function Navigation() {
return (
   <Container>
        <Title variant="h6" component="div" >
            Tasks
        </Title>
        <Container>
            <Space style={{marginRight:5 }}>
                    <Button type="primary">New task</Button>
            </Space>
            <SearchBar placeholder="input search text"   />
            <IconButton>
                <FilterAltOutlinedIcon />
            </IconButton>
        </Container>
    </Container>
)}