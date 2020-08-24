import React from "react";
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="mt-3">
            <nav className="navCust">
                <ul className="pagination justify-content-center">
                    {pageNumbers.map((number) => (
                        <li key={number} className="page-item">
                            <a
                                onClick={() => paginate(number)}
                                href="#/"
                                className="page-link"
                            >
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
