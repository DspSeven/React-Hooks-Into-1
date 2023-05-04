import {useState} from 'react'
import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => {
  const [name, setName] = useState('')
  const changeName = event => setName(event.target.value)
  return (
    <MainContainer>
      <NameInput type="text" placeholder="Your name" value={name} onChange={changeName}/>
      <MsgContent>
        Hello <NameText>{name}</NameText>
      </MsgContent>
    </MainContainer>
  )
}

export default GreetUser
