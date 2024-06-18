import { useMemo, useState } from "react";
import Pagination from "../../Pagination";
import "./style.css";
import { Link, useParams } from "react-router-dom";
import AccountMenu from "../../AccountMenu/AccountMenu";
let PageSize = 10;

const Table = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  const { slug } = useParams();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="sc-ksZaOG fTWdUy sc-hHlrlp jpUFqJ">
      <div className="sc-eUuhEu cSrPXG">
        <div className="sc-fpWsVo ggQoUI">
          <table className="sc-jxgYAQ bTUgrj">
            <thead>
              <tr className="sc-efqFOJ jOOxrR">
                <th className="sc-chHleq dPYKMj">
                  <div className="sc-ifmBRf gjRqfk">
                    <div className="sc-bMthRQ fqhrXM">Message Name</div>
                  </div>
                </th>
                <th className="sc-chHleq dPYKMj">
                  <div className="sc-ifmBRf gjRqfk">
                    <div className="sc-bMthRQ fqhrXM">Status</div>
                  </div>
                </th>
                <th className="sc-chHleq dPYKMj">
                  <div className="sc-ifmBRf gjRqfk">
                    <div className="sc-bMthRQ fqhrXM">Sent At</div>
                  </div>
                </th>
                <th className="sc-chHleq dPYKMj">
                  <div className="sc-ifmBRf gjRqfk">
                    <div className="sc-bMthRQ fqhrXM">Date</div>
                  </div>
                </th>
                <th className="sc-chHleq AJEQY">
                  <div className="sc-ifmBRf gjRqfk">
                    <div className="sc-bMthRQ fqhrXM">Sent</div>
                  </div>
                </th>
                <th className="sc-chHleq AJEQY">
                  <div className="sc-ifmBRf gjRqfk">
                    <div className="sc-bMthRQ fqhrXM">Clicked</div>
                  </div>
                </th>
                <th className="sc-chHleq AJEQY">
                  <div className="sc-ifmBRf gjRqfk">
                    <div className="sc-bMthRQ fqhrXM"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="sc-kTmzSA hUaJJt">
              {currentTableData.map((item, i) => (
                <tr className="sc-hJYyEF cVNjcc" key={i}>
                  <td className="sc-fMpdUm fAKKLs">
                    <Link
                      to={`/project/${slug}/notifications/${crypto.randomUUID()}`}
                    >
                      <div className="sc-gchOna eeWwvU">
                        {crypto.randomUUID()}
                      </div>
                    </Link>
                  </td>
                  <td className="sc-fMpdUm fAKKLs">
                    <span className="sc-hWlEnr ijnGzk sc-kKrQFk dSJCiS">
                      Delivered
                    </span>
                  </td>
                  <td className="sc-fMpdUm fAKKLs">
                    <span>07/12/23, 11:00:18 pm</span>
                  </td>
                  <td className="sc-fMpdUm fAKKLs">
                    <span>a month ago</span>
                  </td>
                  <td className="sc-fMpdUm cjQHve">0</td>
                  <td className="sc-fMpdUm cjQHve">N/A</td>
                  <td className="sc-fMpdUm bkSSMv">
                    <button
                      aria-haspopup="true"
                      aria-controls="menu--46"
                      className="sc-ivmvlL kxALqx"
                      id="menu-button--menu--46"
                      type="button"
                      data-reach-menu-button=""
                      onClick={handleClick}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="sc-hKMtZM kLkPUM"
                      >
                        <path
                          d="M8 5.25A1.625 1.625 0 108 2a1.625 1.625 0 000 3.25zM8 9.625a1.625 1.625 0 100-3.25 1.625 1.625 0 000 3.25zM9.625 12.375a1.625 1.625 0 11-3.25 0 1.625 1.625 0 013.25 0z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
          <AccountMenu
            anchorEl={anchorEl}
            handleClick={handleClick}
            handleClose={handleClose}
            open={open}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
