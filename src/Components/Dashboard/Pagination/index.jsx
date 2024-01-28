import React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import "./style.css";

export default function PaginationComponent({ coins, page, handlePageChange }) {
    let totalCoins = coins.length;
    let cnt = parseInt(totalCoins / 10);
    return (
        <div className="pagination-component">
            <Typography>Page : {page}</Typography>
            <Pagination
                count={cnt}
                page={page}
                onChange={(event, value) => handlePageChange(event, value)}
                sx={{
                    color: "var(--white)",
                    "& .Mui-selected": {
                        backgroundColor: "var(--blue) !important",
                        color: "#fff !important",
                        borderColor: "var(--blue) !important",
                    },
                    "& .MuiPagination-ellipsis": {
                        border: "0px solid var(--grey) !important",
                    },

                    "& .MuiPaginationItem-text": {
                        color: "var(--black)",
                        border: "1px solid var(--grey)",
                    },
                }}
            />
        </div>
    );
}
