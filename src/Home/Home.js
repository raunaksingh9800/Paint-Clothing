import { Button } from '@mantine/core';
import {IconArrowRight} from '@tabler/icons-react'
import { useNavigate
} from "react-router-dom";





function Home() {
    document.title = "Home Page";
    const navigate = useNavigate();
  return (
    <>
        <div class='w-screen h-screen flex flex-auto justify-center items-center'>
        <Button
            onClick={() => {
                navigate('/product');
            }}
            rightSection={<IconArrowRight size={30} />}
            variant="gradient"
            size="xl"
            gradient={{ from: 'blue', to: 'grape', deg: 90 }}
            >
            Go to Product Page
        </Button>
        </div>
    </>
  );
}

export default Home;
