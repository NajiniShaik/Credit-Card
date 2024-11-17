import {useState} from 'react'

import {
  BgContainer,
  DetailedContainer,
  MainHeading,
  Container,
  HrLine,
  CreditCardContainer,
  Card,
  CardNumber,
  CardName,
  SubTitle,
  InputContainer,
  Title,
  InputElement,
} from './styledComponents'

const CreditCard = () => {
  const [creditCardNumber, setNumber] = useState('')
  const [creditCardHolderName, setName] = useState('')

  const onChangeNumber = event => setNumber(event.target.value)

  const onChangeName = event => setName(event.target.value)

  return (
    <BgContainer>
      <DetailedContainer first>
        <Container>
          <MainHeading>CREDIT CARD</MainHeading>
          <HrLine />
        </Container>
        <CreditCardContainer data-testid="creditCard">
          <CardNumber>{creditCardNumber.toUpperCase()}</CardNumber>
          <Card>
            <SubTitle>CARDHOLDER NAME</SubTitle>
            <CardName>{creditCardHolderName}</CardName>
          </Card>
        </CreditCardContainer>
      </DetailedContainer>

      <DetailedContainer>
        <InputContainer>
          <Title>Payment Method</Title>
          <InputElement
            type="text"
            placeholder="Card Number"
            onChange={onChangeNumber}
            value={creditCardNumber}
          />
          <InputElement
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeName}
            value={creditCardHolderName}
          />
        </InputContainer>
      </DetailedContainer>
    </BgContainer>
  )
}

export default CreditCard
