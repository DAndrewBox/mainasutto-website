import styled from 'styled-components';

export const MailchimpFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  padding-bottom: 1.25rem;
  background: #ddd;
  border-color: #333;
  border-radius: 0.5rem;
  font-family: 'Open Sans', sans-serif;
  filter: drop-shadow(0px 0.5rem 2.5rem rgb(255, 255, 255, 0.25));

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const MailchimpFormHeader = styled.img`
  width: 100%;
  height: auto;
  max-height: 18rem;
  border-radius: 0.5rem 0.5rem 0 0;
  margin-bottom: 1rem;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 10rem;
  }
`;

export const MailchimpInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 95%;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;

    > input {
      padding: 0.5rem;
      border: 1px solid #333;
      height: 1.16rem;
      border-radius: 0.25rem;
    }

    > label {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0.125rem;

      > span:first-of-type {
        color: red;
      }

      > span:last-of-type {
        color: #333;
        font-weight: 300;
        font-size: 0.75rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;

    > div {
    }
  }
`;

export const MailchimpButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  margin-top: 0.5rem;

  > button {
    padding: 0.5rem 1rem;
    border: 2px solid var(--color-bg-primary);
    border-radius: 0.5rem;
    background: transparent;
    color: var(--color-bg-primary);
    font-size: 1.25rem;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    transition: all ease-out 0.25s;

    &:hover {
      background: var(--color-bg-primary);
      color: var(--color-text-primary);
    }

    &:disabled {
      background: var(--color-bg-primary);
      color: var(--color-text-secondary);
      cursor: not-allowed;
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;

    > button {
      width: 100%;
    }
  }
`;
