import {
  ReleaseReturnButton,
  ReleasesSubtitle,
  ReleasesTableBody,
  ReleasesTableCell,
  ReleasesTableContainer,
  ReleasesTableContent,
  ReleasesTableHeader,
  ReleasesTableHeaderCell,
  ReleasesTableRow,
  ReleasesTitle,
} from './ReleasesTable.styles';
import { useNavigate } from 'react-router-dom';

export const ReleasesTable = ({ title, subtitle, releases }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  };

  return (
    <ReleasesTableContainer>
      <ReleasesTitle>{title}</ReleasesTitle>
      <ReleasesSubtitle>{subtitle}</ReleasesSubtitle>

      <ReleasesTableContent>
        <ReleasesTableHeader>
          <ReleasesTableHeaderCell>Project Name</ReleasesTableHeaderCell>
          <ReleasesTableHeaderCell>Version</ReleasesTableHeaderCell>
          <ReleasesTableHeaderCell>Date</ReleasesTableHeaderCell>
          <ReleasesTableHeaderCell>Observations</ReleasesTableHeaderCell>
        </ReleasesTableHeader>

        <ReleasesTableBody>
          {releases.map((release) => (
            <ReleasesTableRow key={release.version} href={release.href} target="_blank">
              <ReleasesTableCell>{release.name}</ReleasesTableCell>
              <ReleasesTableCell>{release.version}</ReleasesTableCell>
              <ReleasesTableCell>{release.date}</ReleasesTableCell>
              <ReleasesTableCell>{release?.notes ?? '-'}</ReleasesTableCell>
            </ReleasesTableRow>
          ))}
        </ReleasesTableBody>
      </ReleasesTableContent>

      <ReleaseReturnButton onClick={goBack}>Go Back</ReleaseReturnButton>
    </ReleasesTableContainer>
  );
};
