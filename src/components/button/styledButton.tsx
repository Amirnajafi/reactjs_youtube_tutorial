import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(props) => props.color || "#2780ff"};
  border: none;
  padding: 5px 10px;
  width: 100%;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    /* scale of hover */
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
  span {
    color: ${(props) => props.theme.dark.primary};
    font-size: 6px;
  }
`;

export const BoredredButton = styled(StyledButton)`
  border: 1px solid black;
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  border: 1px solid black;
`;
