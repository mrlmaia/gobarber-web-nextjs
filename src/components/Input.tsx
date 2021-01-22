import { useRef, useEffect } from 'react'
import { useField } from '@unform/core'

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as CInput,
  InputGroupProps,
  InputProps
} from '@chakra-ui/react'

interface Props extends InputProps {
  name: string
  size?: string
  disabled?: boolean
}

const Input = ({ name, disabled, ...rest }: Props) => {
  // if (!label && !customLabel) {
  //   throw new Error('You need to use label or customLabel prop')
  // }

  const inputRef = useRef(null)

  const { fieldName, registerField, defaultValue, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <FormControl isInvalid={!!error} isDisabled={disabled}>
      <CInput
        type="text"
        defaultValue={defaultValue}
        id={fieldName}
        ref={inputRef}
        _disabled={{ bg: 'gray.100' }}
        variant="filled"
        bg="#232129"
        _hover={{
          bg: '#232129'
        }}
        borderRadius="10px"
        border="2px solid #232129"
        p={4}
        w="100%"
        _placeholder={{ color: '#666360' }}
        {...rest}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  )
}

export default Input
