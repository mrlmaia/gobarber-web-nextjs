import {
  Box,
  Heading,
  Link as CLink,
  Icon,
  Flex,
  useToast
} from '@chakra-ui/react'
import Image from 'next/image'
import { Form } from '@unform/web'
import { useCallback, useRef } from 'react'
import { Button, Input } from '../components'
import { FiLock, FiMail, FiArrowLeft, FiUser } from 'react-icons/fi'
import { shade } from 'polished'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from '../utils/getValidationErrors'
type FormData = {
  name: string
  email: string
  password: string
  repeatPassword: string
}

const Register = () => {
  const formRef = useRef<FormHandles>(null)

  const toast = useToast()

  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      formRef.current.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string()
          .required('Informe um nome')
          .matches(/^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g, 'Insira apenas letras'),
        email: Yup.string()
          .required('Informe um email')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(
          6,
          'A senha deve conter no mínimo 6 caracteres'
        ),
        repeatPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'As senhas não coincidem')
          .required('As senhas não coincidem')
      })

      await schema.validate(data, { abortEarly: false })

      alert('/dashboard')
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error)
        formRef.current?.setErrors(errors)
      } else {
        toast({
          title: 'Ocorreu um erro ao realizar cadastro',
          status: 'error',
          description: error.message
        })
      }
    }
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
            <Input
              type="password"
              name="repeatPassword"
              placeholder="Repita a senha"
              formControlProps={{ mt: 2 }}
              icon={FiLock}
            />
            <Button type="submit">Cadastrar</Button>
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
