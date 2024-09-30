import styled from 'styled-components'

const RegistrationArea = styled.div`
  background: red;
`

const RegistrationImg = styled.div`
  background-image: url(/img-background.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

export default function Registration() {
  return (
    <>
      <RegistrationArea>Registration</RegistrationArea>
      <RegistrationImg />
    </>
  )
}
