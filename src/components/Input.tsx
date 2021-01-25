import { useRef, useEffect, useState, useCallback } from 'react'
import { useField } from '@unform/core'
import { IconBaseProps } from 'react-icons'

import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  Input as CInput,
  InputGroup,
  InputLeftElement,
  InputProps
} from '@chakra-ui/react'

interface Props extends InputProps {
  name: string
  formControlProps?: FormControlProps
  icon?: React.ComponentType<IconBaseProps>
  size?: string
  disabled?: boolean
}

const Input = ({
  name,
  disabled,
  icon: Icon,
  formControlProps,
  ...rest
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current.value)
  }, [])

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const { fieldName, registerField, defaultValue, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <FormControl
      isInvalid={!!error}
      isDisabled={disabled}
      {...formControlProps}
    >
      <InputGroup>
        {Icon && (
          <InputLeftElement
            pointerEvents="none"
            children={
              <Icon
                color={isFilled ? '#ff9000' : isFocused ? '#ff9000' : '#666360'}
              />
            }
            mr={2}
          />
        )}
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
          w="100%"
          _placeholder={{ color: '#666360' }}
          focusBorderColor="#ff9000"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  )
}

export default Input
