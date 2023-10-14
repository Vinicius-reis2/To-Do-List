import styled from "styled-components";

export const StyledFilter = styled.div`
  border-bottom: 1px solid white;
  margin-bottom: 20px;
  padding-bottom: 20px;

  .filterOptions {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
  }

  .filterOptions div{
    flex: 1 1 0;
  }
`;
