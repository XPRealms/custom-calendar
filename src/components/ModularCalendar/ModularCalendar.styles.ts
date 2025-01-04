import { css } from '@emotion/css'

export function generateWrapper(size: number) {
  return css`
  display: grid;
  grid-template-columns: repeat(${size}, 1fr);
  gap: 10px;
`
}
