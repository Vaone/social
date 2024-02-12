import React from 'react';
import styled from 'styled-components';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPages = () => {
    const pages = [];

    // Рендер первых трех страниц
    for (let i = 1; i <= Math.min(totalPages, 3); i++) {
      pages.push(
        <PageNumber
          key={i}
          onClick={() => onPageChange(i)}
          isActive={i === currentPage}
        >
          {i}
        </PageNumber>
      );
    }

    // Если текущая страница находится на расстоянии > 3 от начала, добавляем многоточие
    if (currentPage > 3) {
      pages.push(<span key="ellipsis">...</span>);
    }

    // Рендер текущей страницы и следующих двух страниц
    for (let i = Math.max(currentPage - 1, 1); i <= Math.min(currentPage + 2, totalPages); i++) {
      pages.push(
        <PageNumber
          key={i}
          onClick={() => onPageChange(i)}
          isActive={i === currentPage}
        >
          {i}
        </PageNumber>
      );
    }

    // Если текущая страница находится на расстоянии < 3 от конца, добавляем многоточие
    if (currentPage < totalPages - 2) {
      pages.push(<span key="ellipsis">...</span>);
    }

    return pages;
  };

  return <PaginationContainer>{renderPages()}</PaginationContainer>;
};

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
interface PageNumberProps {
  isActive: boolean;
}
const PageNumber = styled.div<PageNumberProps>`
  padding: 5px 10px;
  margin: 0 2px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? '#333' : '#fff')};
  color: ${(props) => (props.isActive ? '#fff' : '#333')};
  border: 1px solid #333;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;
