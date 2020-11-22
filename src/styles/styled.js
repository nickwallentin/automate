import { styled } from "linaria/react"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min(1280px, 90%) 1fr;

  & > * {
    grid-column: 2;
  }
`

export const Section = styled.div`
  padding-top: 10vh;
  padding-bottom: 10vh;
`
