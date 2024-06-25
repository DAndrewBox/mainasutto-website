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
  const handleDownload = async (path) => {
    const BASE_API_URL = process.env.NODE_ENV === 'production' ? 'https://mainasutto.com' : 'http://localhost:3001';
    const response = await fetch(`${BASE_API_URL}/api/releases/${path}`);
    if (response.status === 200) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = path.split('/').pop();
      a.click();
      window.URL.revokeObjectURL(url);
    }
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
            <ReleasesTableRow key={release.version} onClick={() => handleDownload(release.href)} target="_blank">
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
