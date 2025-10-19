import styled from 'styled-components';

export const ReleasesTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: #cccccc11;
  border-radius: 0.5rem;
  border-color: var(--color-text-primary);
  backdrop-filter: blur(5px);
  text-shadow: 0 0 1rem #05051e20;
  width: 55vw;
  margin-bottom: 3%;
`;

export const ReleasesTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: var(--color-text-primary);
  margin-top: 0;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
`;

export const ReleasesSubtitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  color: var(--color-text-secondary);
  margin-top: 0;
`;

export const ReleasesTableContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
  border-top: 1px solid var(--color-text-secondary);
  padding: 0.5rem 0;
`;

export const ReleasesTableHeader = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr) 1.5fr;
  width: 100%;
`;

export const ReleasesTableHeaderCell = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  color: var(--color-text-primary);
  text-align: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const ReleasesTableBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-y: auto;
  max-height: 40vh;
  border-bottom: 1px solid #cccccc33;
  border-top: 1px solid #cccccc33;
`;

export const ReleasesTableRow = styled.a`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr) 1.5fr;
  width: 100%;
  padding: 0.5rem 0;
  background-color: #05051e33;
  color: var(--color-text-secondary);
  text-decoration: none;
  align-items: center;
  transition: all 0.16s ease-in-out;
  font-family: 'Open Sans', sans-serif;

  div:first-child {
    font-weight: 600;
    letter-spacing: 1px;
  }

  &:hover {
    background-color: #f6a63f33;
    color: var(--color-text-primary);
    text-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.33);
    cursor: pointer;
  }
`;

export const ReleasesTableCell = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  margin: 0 1rem;

  &:first-child {
    text-align: left;
  }

  &:last-child {
    font-size: 0.75rem;
    text-align: right;
  }
`;

export const ReleaseReturnButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  border: 1px solid var(--color-text-primary);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.16s ease-in-out;
  color: var(--color-text-primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;

  &:hover {
    background-color: var(--color-text-primary);
    text-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.66);
    color: var(--color-bg-primary);
  }
`;
