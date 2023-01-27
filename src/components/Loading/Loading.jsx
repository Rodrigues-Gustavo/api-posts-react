import styled from "styled-components";

const Loading = styled.div`
    width: 50px;
    height: 50px;
    border: 8px solid #f3f3f3;
    border-top: 10px solid;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-radius: 50px;
    animation: spinner 1.5s linear infinite;
    

    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default Loading