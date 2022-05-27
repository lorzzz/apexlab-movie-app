import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      if (filter === "") {
        navigate({ pathname: "movies" });
      } else {
        navigate({
          pathname: "movies",
          search: createSearchParams({
            q: filter,
          }).toString(),
        });
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "#F5C518" }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/">
              <div className="logo-container">
                <img
                  className="apex-logo"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkxIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTkxIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2NC42NjUgMjEuNjFMMTY2Ljk1MyAyNi4xMTU5SDE2Mi4zNzhMMTY0LjY2NSAyMS42MVpNMTczLjM5MSAyNS44NjMzSDE3OC41OTdDMTgwLjAxNyAyNS44NjMzIDE4MC44NTMgMjYuMDY4NiAxODAuODUzIDI3LjE5MTFDMTgwLjg1MyAyOC4yOTc2IDE4MC4wMTcgMjguNTE5NSAxNzguNTk3IDI4LjUxOTVIMTczLjM5MVYyNS44NjMzWk0xNzMuMzkxIDIxLjQzNjFIMTc4LjA3N0MxNzkuNDQ5IDIxLjQzNjEgMTgwLjMwMSAyMS42NzMzIDE4MC4zMDEgMjIuNjg1MkMxODAuMzAxIDIzLjcxMjcgMTc5LjQ0OSAyMy45MzQgMTc4LjA3NyAyMy45MzRIMTczLjM5MVYyMS40MzYxWk0xNTguNjQyIDMwLjUxMTVIMTYwLjE1NEwxNjEuMzM3IDI4LjE3MTZIMTY4LjAxTDE2OS4xOTMgMzAuNTExNUgxNzAuODk5SDE3MS45MjJIMTc5LjExOEMxODEuNzY4IDMwLjUxMTUgMTgzLjQ0IDI5LjQzNjMgMTgzLjQ0IDI3LjQ3NTdDMTgzLjQ0IDI1LjcyMSAxODIuMDg0IDI0LjgxOTggMTgwLjM0OCAyNC43MjQ1QzE4MS45ODkgMjQuNjEzOSAxODIuODA5IDIzLjUzODcgMTgyLjgwOSAyMi4yNzM5QzE4Mi44MDkgMjAuNDg3MiAxODEuMTM3IDE5LjQ0NDMgMTc4LjQ4NyAxOS40NDQzSDE3MC44OTlWMjguNTc1NEwxNjYuMDcgMTkuNDQ0M0gxNjMuMzA5TDE1OC42MSAyOC4zMjk1SDE1MC44MzNWMTkuNDQ0M0gxNDguMzA5VjMwLjUxMTVIMTU3LjQ1NkgxNTguNjQyWiIgZmlsbD0iIzJERTFBRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0My43MjcgNDcuMTc0M0gxODguMDIyVjIuNzgxMzZIMTQzLjcyN1Y0Ny4xNzQzWk0xNDAuOTUyIDQ5Ljk1NTNIMTkwLjc5N1YwSDE0MC45NTJWNDkuOTU1M1oiIGZpbGw9IiMyREUxQUYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy44MTg4IDI4LjM0NDdDMTEuMDc2MSAyOC4zNDQ3IDguNDkwMzIgMjkuMDI4MiA2LjIyMDE3IDMwLjIzMjZMMTMuNzg2MSAxNi4zOTMzTDIxLjMyNTEgMzAuMTg0MUMxOS4wNzc0IDI5LjAwOTggMTYuNTI0NyAyOC4zNDQ3IDEzLjgxODggMjguMzQ0N1pNMTIuMjcyMSAxMy44NTQ1TDAgMzYuMDEzNEgwLjAwODg1NjI2SDMuMDYwMTNIMy4xMjI0MkM1LjY0ODUyIDMyLjg5MDMgOS41MDQyNCAzMC44ODk0IDEzLjgxODcgMzAuODg5NEMxOC4xMjgyIDMwLjg4OTQgMjEuOTc5NSAzMi44ODU4IDI0LjUwNTYgMzYuMDAyNEwyNC41MTE1IDM2LjAxMzRIMjQuNTE1SDI3LjYyODlIMjcuNjM3NEwxNS4zNjUzIDEzLjg1NDVIMTIuMjcyMVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTEuNzg3MSAyNS45MjM3SDQxLjQ1NjNWMTYuNDI2NEg1MS43ODcxQzU1LjUzOCAxNi40MjY0IDU3Ljk3MjkgMTcuOTQzMyA1Ny45NzI5IDIxLjE3NDlDNTcuOTcyOSAyNC40MDY5IDU1LjUzOCAyNS45MjM3IDUxLjc4NzEgMjUuOTIzN1pNNTEuOTg0MiAxMy44NTQ1SDM4LjY5MjRWMzYuMDEzNEg0MS40NTYxVjI4LjQ5NTZINTEuOTg0MkM1Ny4yODE3IDI4LjQ5NTYgNjAuODAyNiAyNS43OTE4IDYwLjgwMjYgMjEuMTc0OUM2MC44MDI2IDE2LjU1ODYgNTcuMjgxNyAxMy44NTQ1IDUxLjk4NDIgMTMuODU0NVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzEuODU3OSAzNi4wMTMxSDkzLjk2NzlWMzMuNDQxMkg3NC42MjJWMjYuMjE5Nkg5MS4zMjQ5VjIzLjY0NzdINzQuNjIyVjE2LjQyNjRIOTMuOTY3OVYxMy44NTQ1SDcxLjg1NzlWMzYuMDEzMVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTI2LjM3NiAxMy44NTQ1TDExNy41MDkgMjIuOTg4MkwxMDguNjQyIDEzLjg1NDVIMTA1LjAyMkwxMTUuNjMzIDI0Ljg2ODFMMTA1LjAyMiAzNi4wMTMxSDEwOC41NDNMMTE3LjQxIDI2Ljc4MDJMMTI2LjI3NyAzNi4wMTMxSDEyOS44OTZMMTE5LjI4NSAyNC44MzVMMTI5Ljg5NiAxMy44NTQ1SDEyNi4zNzZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
                  alt="apex-logo"
                />
                <span className="logo-text">Movies</span>
              </div>
            </Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search movies…"
              value={filter}
              onKeyDown={(event) => handleSearch(event)}
              onChange={(event) => handleFilterChange(event)}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
