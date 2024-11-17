import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const DetailedContainer = styled.div`
  background-color: ${props => (props.first ? ' #3b4b69' : '#ffffff')};
  height: 50%;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.first ? 'flex-start' : 'center')};
  align-items: center;
  @media (min-width: 768px) {
    height: 100%;
    width: ${props => (props.first ? '40%' : '60%')};
  }
`

export const Container = styled.div`
  position: relative;
  left: 0;
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
  font-family: 'Roboto';
  margin: 0px;
  padding: 0px;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    font-size: 44px;
  }
`

export const HrLine = styled.hr`
  border-color: #ffd773;
  border-width: 2px;
  position: absolute;
  width: 75%;
`

export const CreditCardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 35vh;
  width: 100%;
  max-width: 450px;
  border-radius: 15px;
  margin-top: 50px;
  padding: 10px 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    margin-top: 150px;
  }
`

export const CardNumber = styled.p`
  color: #ffffff;
  font-size: 26px;
  font-weight: 500;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 34px;
  }
`

export const Card = styled.div`
  text-align: left;
`

export const SubTitle = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 16px;
  }
`
export const CardName = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const InputContainer = styled.form`
  max-width: 450px;
  height: 35vh;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 0px 17px #c3cad9;
`

export const Title = styled.h1`
  color: #344e7a;
  font-size: 24px;
  font-weight: 600;
  font-family: 'Roboto';
  text-align: center;
  @media (min-width: 768px) {
    font-size: 28px;
  }
`
export const InputElement = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #d3d9e0;
  border-radius: 3px;
  outline: none;
  padding: 5px 10px;
  margin-bottom: 20px;
  color: #475569;
  font-size: 16px;
  font-family: 'Roboto';
`
