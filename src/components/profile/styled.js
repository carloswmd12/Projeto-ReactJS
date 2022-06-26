import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    `;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin: 10px;
        text-align: center; 
    }
    `;

export const WrapperUsername = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    h3 {
        margin-rigth: 10px;
    }

    a {
        font-size: 18px;
        color: #008B8B;
        font-weight: bold;
    }
    `;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: auto;
    margin-left: 10px;
    height: 200px;

    h1 {
        font-size: 32px;
        font-weight: bold;
        margin-top: 20px;
    }
    h3 {
        font-size: 18px;
        font-weight: bold;
    }
    h4 {
        font-size: 16px;
        font-weight: bold;
    `;

export const WrapperImage = styled.img`
    border-radius: 100%;
    width: 200px;
    margin: 10px;
    margin-top: 20px;
    `;

    export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    h3 {
      margin-right: 8px;
    }
    a {
      font-size: 18px;
      color: #008B8B;
      font-weight: bold;
    }
  `;