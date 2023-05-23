import React, { useEffect, useState } from "react";
import * as S from "./pagination.styled";

const Pagination = ({ actualPage, totalPages, onPageChange }) => {
	const [currentPage, setCurrentPage] = useState(actualPage);

	const handlePageClick = (page = 1) => {
		setCurrentPage(page);
	};

	const handleLastPageClick = () => {
		setCurrentPage(totalPages);
	};

	const renderPageButtons = () => {
		const buttons = [];
		for (let i = currentPage; i <= currentPage + 3; i++) {
			buttons.push(
				<S.PageButton
					key={i}
					active={i === currentPage ? 1 : 0}
					onClick={() => {
						handlePageClick(i);
						onPageChange(i);
					}}
				>
					{i}
				</S.PageButton>
			);
		}
		return buttons;
	};

	return (
		<S.PaginationContainer>
			<S.PageButton
				onClick={() => {
					onPageChange(currentPage);
					handlePageClick();
				}}
			>
				First
			</S.PageButton>
			<div>
				{renderPageButtons()}...{totalPages}
			</div>
			<S.LastPageButton onClick={handleLastPageClick}>Last</S.LastPageButton>
		</S.PaginationContainer>
	);
};

export default Pagination;
