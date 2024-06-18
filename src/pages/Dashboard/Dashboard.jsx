import { Box } from "@mui/material";
import Header from "../../components/PageHeader/Header";
import { useParams } from "react-router-dom";
import Head from "../../components/Head/Head";
import {
  ShortCutMenuOption,
  dayfilteroptions,
  platformfilteroptions,
} from "../../Utils/constants";
import CustomBox from "../../components/Layout/Dashboard/Box";
import "./style.css";
import DropDownTest from "../../components/DropDown/DropDownTest";
const Dashboard = () => {
  const { slug } = useParams();
  let options = ShortCutMenuOption(slug);

  return (
    <CustomBox>
      <Head title={`${slug} | Overview`} />
      <Box className="ljjPdH">
        <Header title="Dashboard" subtitle="Overiew Section" />
       
        <div>
          <div>
            <DropDownTest
              options={options}
              menutype="ShortCutMenuOption"
              style={{ right: 0 }}
            />
          </div>
        </div>
      </Box>

      {/* top 3 boxes */}
      <div className="fgLZXi" style={{ marginTop: "2rem" }}>
        <div className="lotpeY">
          <p className="bMBPEl">Active Subscriptions</p>
          <div className="kmYBKc">
            <span>0</span>
          </div>
          <div className="kyorwX">
            <div
              className="jpygez sc-evZas dliljm"
              aria-label="More information"
            >
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="kLkPUM"
              >
                <g fill="currentColor">
                  <path d="M8 0a8 8 0 108 8 8.009 8.009 0 00-8-8zm0 12.667a1 1 0 110-2 1 1 0 010 2zm1.067-4.054a.667.667 0 00-.4.612.667.667 0 01-1.334 0 2 2 0 011.2-1.834A1.333 1.333 0 106.667 6.17a.667.667 0 01-1.334 0 2.667 2.667 0 113.734 2.444z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="lotpeY">
          <p className="bMBPEl">Monthly Active Users</p>
          <div className="kmYBKc">
            <span>0</span>
          </div>
          <div className="kyorwX">
            <div
              className="jpygez sc-evZas dliljm"
              aria-label="More information"
            >
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="kLkPUM"
              >
                <g fill="currentColor">
                  <path d="M8 0a8 8 0 108 8 8.009 8.009 0 00-8-8zm0 12.667a1 1 0 110-2 1 1 0 010 2zm1.067-4.054a.667.667 0 00-.4.612.667.667 0 01-1.334 0 2 2 0 011.2-1.834A1.333 1.333 0 106.667 6.17a.667.667 0 01-1.334 0 2.667 2.667 0 113.734 2.444z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="lotpeY">
          <p className="bMBPEl">Push Subscriptions</p>
          <div className="kmYBKc">
            <span>0</span>
          </div>
          <div className="kyorwX">
            <div
              className="jpygez sc-evZas dliljm"
              aria-label="More information"
            >
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="kLkPUM"
              >
                <g fill="currentColor">
                  <path d="M8 0a8 8 0 108 8 8.009 8.009 0 00-8-8zm0 12.667a1 1 0 110-2 1 1 0 010 2zm1.067-4.054a.667.667 0 00-.4.612.667.667 0 01-1.334 0 2 2 0 011.2-1.834A1.333 1.333 0 106.667 6.17a.667.667 0 01-1.334 0 2.667 2.667 0 113.734 2.444z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* total subscription */}
      <div style={{ marginTop: "2rem" }}>
        <div className="lotpeY">
          <div className="kyorwX">
            <div
              className="sc-crXcEl jpygez sc-evZas dliljm"
              aria-label="More information"
            >
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="sc-hKMtZM kLkPUM"
              >
                <g fill="currentColor">
                  <path d="M8 0a8 8 0 108 8 8.009 8.009 0 00-8-8zm0 12.667a1 1 0 110-2 1 1 0 010 2zm1.067-4.054a.667.667 0 00-.4.612.667.667 0 01-1.334 0 2 2 0 011.2-1.834A1.333 1.333 0 106.667 6.17a.667.667 0 01-1.334 0 2.667 2.667 0 113.734 2.444z"></path>
                </g>
              </svg>
            </div>
          </div>
          <p className="sc-bczRLJ bMBPEl">Total Subscriptions</p>
          {/* chart */}
          <div className="eLtwHC">
            <div className="kmYBKc">
              1<span className="sc-dkzDqf iHPWUI">+0.00% (+0)</span>
              <div className="qWacY">
                <div className="eDVqSI">
                  <DropDownTest
                    options={dayfilteroptions}
                    menutype="dayfilter"
                  />
                  <DropDownTest
                    options={platformfilteroptions}
                    menutype="platformfilter"
                  />
                </div>
              </div>
              <div className="fSBNnI"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Global Outcomes */}
      <div style={{ marginTop: "2rem" }}>
        <div className="lotpeY">
          <div className="kyorwX">
            <div
              className="sc-crXcEl jpygez sc-evZas dliljm"
              aria-label="More information"
            >
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="sc-hKMtZM kLkPUM"
              >
                <g fill="currentColor">
                  <path d="M8 0a8 8 0 108 8 8.009 8.009 0 00-8-8zm0 12.667a1 1 0 110-2 1 1 0 010 2zm1.067-4.054a.667.667 0 00-.4.612.667.667 0 01-1.334 0 2 2 0 011.2-1.834A1.333 1.333 0 106.667 6.17a.667.667 0 01-1.334 0 2.667 2.667 0 113.734 2.444z"></path>
                </g>
              </svg>
            </div>
          </div>
          <p className="sc-bczRLJ bMBPEl">Global Outcomes</p>
          {/* chart */}
          <div className="eLtwHC">
            <div className="kmYBKc">
              <div className="qWacY">
                <div className="eDVqSI">
                  <DropDownTest
                    options={dayfilteroptions}
                    menutype="dayfilter"
                  />
                  <DropDownTest
                    options={platformfilteroptions}
                    menutype="platformfilter"
                  />
                  <DropDownTest
                    options={platformfilteroptions}
                    menutype="channel"
                  />
                </div>
              </div>
              <div className="fSBNnI"></div>
            </div>
          </div>
        </div>
      </div>
    </CustomBox>
  );
};

export default Dashboard;
