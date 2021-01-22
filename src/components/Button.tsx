import { ButtonProps, Button as CButton } from '@chakra-ui/react'

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <CButton
      colorScheme="orange"
      size="lg"
      h="56px"
      w="100%"
      border="0"
      p={'0 16px'}
      color="#312e38"
      fontWeight="500"
      mt={4}
      transition="background-color: 0.2s"
      {...rest}
    >
      {children}
    </CButton>
  )
}

export default Button
