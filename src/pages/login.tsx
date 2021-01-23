import { Box, Heading, Link as CLink, Icon, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { Form } from '@unform/web'
import { useCallback, useRef } from 'react'
import { Button, Input } from '../components'
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi'
import { shade } from 'polished'

const SignIn = () => {
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
        <Image src="/logo.svg" height={45} width={165} layout="responsive" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Box m="80px 0" w="340px" textAlign="center">
            <Heading as="h1" mb={6}>
              Faça seu login
            </Heading>
            <Input name="email" placeholder="E-mail" icon={FiMail} />
            <Input
              type="password"
              name="password"
              placeholder="Senha"
              formControlProps={{ mt: 2 }}
              icon={FiLock}
            />
            <Button>Entrar</Button>

            <CLink
              href="/forgot"
              color="#f4edeb"
              display="block"
              textDecoration="none"
              mt={6}
              transition="background-color: 0.2s"
              _hover={{
                color: shade(0.2, '#f4edeb')
              }}
            >
              Esqueci minha senha
            </CLink>
          </Box>
        </Form>
        <CLink
          href="/register"
          color="#ff9000"
          display="flex"
          alignItems="center"
          textDecoration="none"
          transition="background-color: 0.2s"
          _hover={{
            color: shade(0.2, '#ff9000')
          }}
        >
          <Icon as={FiLogIn} />
          Criar conta
        </CLink>
      </Flex>
      <Box
        flex="1"
        background="url('/sign-in-background.png') no-repeat right"
        backgroundSize="cover"
      />
    </Flex>
  )
}

export default SignIn
