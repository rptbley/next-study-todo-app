import { useRouter } from "next/router";
import styled from "styled-components";
import palette from "../../styles/palette";


const Container = styled.footer`
    width: 100%;
    height: 53px;
    position: fixed;
    bottom: 0;
    border-top: 1px solid ${palette.gray};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    
    .footer-button {
        font-size: 32px;
        width: 32px;
        height: 32px;
        border-radius: 5px;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        background-color: white;
        line-height: 0;
        outline: none;
        padding: 0;
        align-items: center;
    }
`;

const Footer: React.FC = () => {
    const router = useRouter();

    const isMain = router.pathname === "/";
    return (
        <Container>
            <button
                type="button"
                className="footer-button"
                onClick={() => {router.push({ pathname: "/todo/add" })}}
            >
                {isMain ? "+" : "-"}
            </button>
        </Container>
    )
}

export default Footer;