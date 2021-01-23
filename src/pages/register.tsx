import { Box, Heading, Link as CLink, Icon, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { Form } from '@unform/web'
import { useCallback, useRef } from 'react'
import { Button, Input } from '../components'
import { FiLock, FiMail, FiArrowLeft, FiUser } from 'react-icons/fi'
import { shade } from 'polished'

const Register = () => {
  const formRef = useRef()
  const handleSubmit = useCallback(() => {
    //
  }, [])

  return (
    <Flex h="100vh" alignItems="stretch">
      <Flex
        flexDirection="column"
        alignItems="center"
        placeContent="center"
        width="100%"
        maxW="700px"
      >
        <Image src="/logo.svg" height={90} width={230} />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Box m="80px 0" w="340px" textAlign="center">
            <Heading as="h1" mb={6}>
              Registre se
            </Heading>
            <Input name="name" placeholder="Nome" icon={FiUser} />
            <Input
              name="email"
              placeholder="E-mail"
              icon={FiMail}
              formControlProps={{ mt: 2 }}
            />
            <Input
              type="password"
              name="password"
              placeholder="Senha"
              formControlProps={{ mt: 2 }}
              icon={FiLock}
            />
            <Button>Cadastrar</Button>
          </Box>
        </Form>
        <CLink
          href="/login"
          color="#f4ede8"
          display="flex"
          alignItems="center"
          textDecoration="none"
          transition="background-color: 0.2s"
          _hover={{
            color: shade(0.2, '#f4ede8')
          }}
        >
          <Icon as={FiArrowLeft} />
          Voltar para log in
        </CLink>
      </Flex>
      <Box
        flex="1"
        background="url('/sign-up-background.png') no-repeat right"
        backgroundSize="cover"
      />
    </Flex>
  )
}

export default Register
