import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ReactFlagsSelect from "react-flags-select";
// import { Slider, Input, InputGroup } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import { useMediaQuery } from "react-responsive";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

// import ReactApexChart from 'react-apexcharts';
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

import {
  activeClass,
  dataCenterProxyRadio,
  ispProxy,
  pricingTabs,
} from "../utils/constants";

import { showRadio } from "../utils/TextDisplay";
import { getRoundOffValue } from "../utils/DcpFormula";
import { calculateResedentialProxy } from "../utils/ResedentialProxiesCalc";

export interface HelloWorldProps {
  children?: React.ReactNode;
  className?: string;
  verbose?: boolean;
}

const rangePoints = {
  10: 1,
  20: 3,
  30: 6,
  40: 12,
} as any;

const DISCOUNTS = {
  10: 0,
  20: -5,
  30: -10,
  40: -15,
} as any;

const LENGTHOFSUBSCRIPTION = {
  10: "oneMonthDisc",
  20: "threeMonthDisc",
  30: "sixMonthDisc",
  40: "twelveMonthDisc",
} as any;

const MONTHVALUE = {
  oneMonthDisc: 1,
  threeMonthDisc: 3,
  sixMonthDisc: 6,
  twelveMonthDisc: 12,
} as any;

const SHOWSUBSCRIPTION = {
  oneMonthDisc: 10,
  threeMonthDisc: 20,
  sixMonthDisc: 30,
  twelveMonthDisc: 40,
} as any;

let chartOptions: any = {
  chart: {
    height: 600,
    type: "radialBar",
  },

  // series: [67],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: 75,
      },
      track: {
        background: "#7D8585",
        strokeWidth: 50,
        margin: 0, // margin is in pixels,
      },

      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -10,
          show: false,
          color: "#888",
          fontSize: "13px",
        },
        value: {
          color: "#111",
          fontSize: "30px",
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#07B6BF"],
    opacity: 1,
    pattern: {
      strokeWidth: 80,
    },
  },
  stroke: {
    lineCap: "round",
    // width: "30",
  },
  labels: ["Progress"],
};

const renderDCPSliderMarks = () => {
  const marks: {
    [key: string]: {
      label: JSX.Element;
    };
  } = {};

  for (const [value, months] of Object.entries(rangePoints)) {
    const discount = DISCOUNTS[value];
    marks[value] = {
      label: (
        <div className="mark-label">
          <div className="duration">
            <p>{months as string}</p>
            <p>{months === 1 ? "MONTH" : "MONTHS"}</p>
          </div>
          {value !== "10" && <span className="discount">{discount} %</span>}
        </div>
      ),
    };
  }

  return marks;
};

const PricingComponent = ({
  children,
  className,
  verbose,
}: HelloWorldProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const [selectedTab, setSelectedTab] = useState(pricingTabs.DataCenterProxies);
  const [resedentialInput, setResidentialInput] = useState(1);
  const [resedentialProxyCalculated, setresedentialProxyCalculated] = useState<
    any | 0
  >(calculateResedentialProxy(Number(resedentialInput)));

  const [ispProxyInput, setIspProxyInput] = useState({
    country: "us",
    mainType: "dedicated",
    length: "threeMonthDisc",
    proxyType: "starterDisc",
  });

  const [ispProxyValue, setIspProxyValue] = useState<any | 0>(5);
  const [ispCalculatedValue, setIspCalculatedValue] = useState<any | 0>(0);

  const [item, setItem] = useState(0);
  const [countries, setCountries] = useState(["US", "GB", "DE", "CA"]);
  const [countriesDataCenterProxy, setCountriesDataCenterProxy] = useState([
    "US",
    "GB",
    "AR",
    "AU",
    "BE",
    "BR",
    "CA",
    "CO",
    "CN",
    "FR",
    "DE",
    "IN",
    "ID",
    "IT",
    "JP",
    "MX",
    "NL",
    "PK",
    "PH",
    "PL",
    "SG",
    "KR",
    "ES",
    "TW",
    "TH",
    "VN",
  ]);
  const [dcpCountry, setDcpCountry] = useState("us");
  const [selected, setSelected] = useState("");
  const [dspRadio, setDspRadio] = useState(
    dataCenterProxyRadio[dcpCountry as keyof typeof dataCenterProxyRadio]
      .radio[0]
  );

  const [dspMonths, setDspMonths] = useState<any | "">("threeMonthDisc");

  const [dspValue, setDspValue] = useState(5);
  const [dspPackage, setDspPackage] = useState<any | "">("starterDisc");
  const [dspCalculatedValue, setDspCalculatedValue] = useState<any | 0>(0);

  const [showContact, setShowContact] = useState(false);

  const range = [
    { value: 1, step: 10 },
    { value: 3, step: 20 },
    { value: 6, step: 30 },
    { value: 12, step: 40 },
  ];

  const onCountrySelect = (code: string): void => {
    console.log({ code });
    setIspProxyInput({ ...ispProxyInput, country: code.toLowerCase() });
    setSelected(code);
  };

  const onDspCountryChange = (code: string) => {
    setDcpCountry(code.toLowerCase());
    setDspRadio(
      dataCenterProxyRadio[
        code.toLowerCase() as keyof typeof dataCenterProxyRadio
      ]?.radio[0]
    );
  };
  useEffect(() => {
    let finalValue = 0;
    let discount = 0;
    let discountTwo = 0;

    if (dspMonths !== "oneMonthDisc") {
      const baseValue = Number(
        dataCenterProxyRadio[dcpCountry as keyof typeof dataCenterProxyRadio][
          dspRadio
        ]["basicPrice"] *
          dataCenterProxyRadio[dcpCountry as keyof typeof dataCenterProxyRadio][
            dspRadio
          ][dspMonths]
      );

      discount = getRoundOffValue(
        dataCenterProxyRadio[dcpCountry as keyof typeof dataCenterProxyRadio][
          dspRadio
        ]["basicPrice"] - baseValue
      );
    } else {
      discount =
        dataCenterProxyRadio[dcpCountry as keyof typeof dataCenterProxyRadio][
          dspRadio
        ]["basicPrice"];
    }
    if (dspPackage !== "starterDisc") {
      // console.log(
      //   'CalcDebg',
      //   dataCenterProxyRadio[dcpCountry as keyof typeof dataCenterProxyRadio][dspRadio][
      //     dspPackage
      //   ],
      //   Number(dspValue),
      //   dataCenterProxyRadio[dcpCountry as keyof typeof dataCenterProxyRadio][dspRadio][
      //     dspMonths
      //   ]
      // );

      discountTwo =
        discount *
        Number(
          dataCenterProxyRadio[dcpCountry as keyof typeof dataCenterProxyRadio][
            dspRadio
          ][dspPackage]
        );

      finalValue = getRoundOffValue(discount - discountTwo);
    } else {
      finalValue = discount;
    }

    setDspCalculatedValue(
      Number(
        (
          Number(finalValue) *
          Number(dspValue) *
          Number(MONTHVALUE[dspMonths])
        ).toFixed(2)
      )
    );
  }, [dspRadio, dspMonths, dspValue, dcpCountry, dspPackage]);

  const handleChangeResidentialProxies = ({ target: { value } }: any) => {
    const re = /^[0-9\b]+$/;

    if (re.test(value) || value == "") {
      setResidentialInput(value);
      setresedentialProxyCalculated(calculateResedentialProxy(Number(value)));
    }
    //  setCalculatedPrice(Number(Number(Number(e.target.value) * 15).toFixed(2)));
  };

  const handleRadioChange = (e: any, name: any) => {
    setIspProxyInput({ ...ispProxyInput, mainType: name });
  };

  const handleIspProxyInputChange = (e: any) => {
    if (e.target.value >= 5 && e.target.value <= 99) {
      setIspProxyInput({ ...ispProxyInput, proxyType: "starterDisc" });
    } else if (e.target.value >= 100 && e.target.value <= 999) {
      setIspProxyInput({ ...ispProxyInput, proxyType: "personalDisc" });
    } else if (e.target.value >= 1000 && e.target.value <= 4999) {
      setIspProxyInput({ ...ispProxyInput, proxyType: "corporate" });
    }
    setIspProxyValue(e.target.value);
  };

  useEffect(() => {
    let finalValue = 0;
    let discount = 0;
    console.log({ ispProxyInput });
    const baseValue =
      ispProxyValue *
      ispProxy[ispProxyInput.country as keyof typeof ispProxy][
        ispProxyInput.mainType
      ][ispProxyInput.length];

    if (ispProxyInput.proxyType !== "starterDisc") {
      discount =
        baseValue *
        Number(
          ispProxy[ispProxyInput.country as keyof typeof ispProxy][
            ispProxyInput.mainType
          ][ispProxyInput.proxyType]
        );

      finalValue = baseValue - discount;
    } else {
      finalValue = baseValue;
    }

    setIspCalculatedValue(finalValue);
  }, [ispProxyInput, ispProxyValue]);

  const handleDspInputChange = ({ target }: any) => {
    const value = target.value;

    if (value >= 5 && value <= 99) {
      setDspPackage("starterDisc");
    } else if (value >= 100 && value <= 999) {
      setDspPackage("personalDisc");
    } else if (value >= 1000 && value <= 4999) {
      setDspPackage("corporate");
    }

    // if (target.value >= 5) {
    //   setDspValue(target.value);
    // } else {
    setDspValue(value);
    // }
  };

  const handleDspRadioChange = (e: any) => {
    setDspRadio(e);
    console.log({ e });
  };

  const renderMonthsForChart = () => {
    if (dspMonths === "oneMonthDisc") {
      return "1 month";
    }
    if (dspMonths === "threeMonthDisc") {
      return "3 months";
    }
    if (dspMonths === "sixMonthDisc") {
      return "6 months";
    }
    if (dspMonths === "twelveMonthDisc") {
      return "12 months";
    }
  };

  const renderDCPChartValue = () => {
    if (dspMonths === "oneMonthDisc") {
      return 25;
    }
    if (dspMonths === "threeMonthDisc") {
      return 50;
    }
    if (dspMonths === "sixMonthDisc") {
      return 75;
    }
    if (dspMonths === "twelveMonthDisc") {
      return 100;
    }

    return 0;
  };

  const renderISPProxiesChartValue = () => {
    if (ispProxyInput.length === "oneMonthDisc") {
      return 25;
    }
    if (ispProxyInput.length === "threeMonthDisc") {
      return 50;
    }
    if (ispProxyInput.length === "sixMonthDisc") {
      return 75;
    }
    if (ispProxyInput.length === "twelveMonthDisc") {
      return 100;
    }

    return 0;
  };

  const getPerMonthValue = (tab: string) => {
    if (tab === "isp") {
      return Number(
        (
          Number(ispCalculatedValue) / Number(MONTHVALUE[ispProxyInput.length])
        ).toFixed(2)
      );
    }

    if (tab === "dataCenter") {
      return Number(
        (Number(dspCalculatedValue) / Number(MONTHVALUE[dspMonths])).toFixed(2)
      );
    }

    return 0;
  };

  console.log({ dspValue, ispProxyValue, resedentialInput });

  return (
    <section className={`pricing-header ${className}`}>
      <div className="section-container">
        {/* <h1 className="section-header">Pricing</h1> */}

        {/* <p className="section-header-desc">
          Simply choose the product you want to calculate for, make your
          selections and we’ll show you how much it’ll cost on the right. It’s
          that easy!
        </p> */}
        <div className="pricing-row">
          <div className="left-col">
            <div className="proxy-types two-cols">
              <div className="lable-box">
                <label>Proxy Type:</label>
              </div>
              <div className="content-box">
                <div className="proxy_side">
                  <button
                    className={`btn-proxy ${
                      selectedTab == pricingTabs.DataCenterProxies && "active"
                    }`}
                    onClick={() => {
                      // setresedentialProxyCalculated("");
                      setSelectedTab(pricingTabs.DataCenterProxies);
                      setShowContact(false);
                    }}
                  >
                    Data Center Proxies
                  </button>
                  <button
                    className={`btn-proxy ${
                      selectedTab == pricingTabs.ResidentialProxies && "active"
                    }`}
                    onClick={() => {
                      // setresedentialProxyCalculated("");

                      setSelectedTab(pricingTabs.ResidentialProxies);
                      setShowContact(false);
                    }}
                  >
                    Residential Proxies
                  </button>
                  <button
                    className={`btn-proxy ${
                      selectedTab == pricingTabs.ISPProxies && "active"
                    }`}
                    onClick={() => {
                      // setresedentialProxyCalculated("");
                      setSelectedTab(pricingTabs.ISPProxies);
                      setShowContact(false);
                    }}
                  >
                    ISP Proxies
                  </button>
                </div>
              </div>
            </div>

            {selectedTab == pricingTabs.DataCenterProxies ? (
              <div>
                <div className="two-cols">
                  <div>
                    {/* <input
                        type="radio"
                        id="test3"
                        name="radio-group"
                        checked={
                          ispProxyInput.mainType === 'semiDedicated'
                            ? true
                            : false
                        }
                        onChange={(e) => handleRadioChange(e, 'semiDedicated')}
                      /> */}
                  </div>
                  <div>
                    <div className="proxy_box">
                      {dataCenterProxyRadio[
                        dcpCountry as keyof typeof dataCenterProxyRadio
                      ].radio.map((r: string, index: any) => (
                        <div
                          className="inner_proxy_box"
                          key={index}
                          onClick={() => handleDspRadioChange(r)}
                        >
                          <input
                            type="radio"
                            id={r}
                            key={r}
                            name={r}
                            value={r}
                            checked={dspRadio === r}
                          />
                          <label htmlFor={r}>{showRadio(r)}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="countries-dropdown-wrapper two-cols">
                  <div className="lable-box">
                    <label>Select Country:</label>
                  </div>
                  <ReactFlagsSelect
                    className="countries-dropdown"
                    selected={dcpCountry.toUpperCase()}
                    showSelectedLabel
                    onSelect={onDspCountryChange}
                    countries={countriesDataCenterProxy}
                  />
                </div>
                <div className="price-slider-range two-cols">
                  <div className="lable-box">
                    <label>Length of Subscription:</label>
                  </div>
                  <div className="price-slider">
                    <Slider
                      min={10}
                      max={40}
                      step={10}
                      onChange={(e: any) => {
                        setDspMonths(LENGTHOFSUBSCRIPTION[e]);

                        console.log({ months: LENGTHOFSUBSCRIPTION[e] });
                      }}
                      value={SHOWSUBSCRIPTION[dspMonths]}
                      marks={renderDCPSliderMarks()}
                      activeDotStyle={{
                        borderColor: "#fff",
                        backgroundColor: "#07b6bf",
                      }}
                      trackStyle={{
                        backgroundColor: "#07b6bf",
                        height: 6,
                      }}
                      railStyle={{
                        height: 6,
                      }}
                      dotStyle={{
                        height: 4,
                        width: 4,
                        bottom: "-2px",
                        display: "none",
                      }}
                      handleStyle={{
                        borderColor: "#07b6bf",
                        backgroundColor: "#07b6bf",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>

                <div className="no-of-proxies two-cols">
                  <div className="lable-box">
                    <label>Number of Proxies:</label>
                  </div>
                  <div className="content-box">
                    <input
                      className={`proxy-input ${dspValue < 5 && "border-red"}`}
                      placeholder=""
                      type="number"
                      defaultValue={5}
                      value={dspValue}
                      onChange={handleDspInputChange}
                      max={9999}
                    />
                    <br />
                    {dspValue < 5 && (
                      <span className="validation-error">
                        Minimum 5 proxies required
                      </span>
                    )}

                    <div className="stats">
                      <span className="stat-item">
                        <b>Starter:</b> <i>5 to 99</i>{" "}
                      </span>
                      <span className="stat-item">
                        <b>Personal:</b> <i>100 to 999</i>{" "}
                        <span className="discount-value">-15%</span>
                      </span>
                      <span className="stat-item">
                        <b>Corporate:</b> <i>1k to 4,999</i>{" "}
                        <span className="discount-value">-25%</span>
                      </span>
                      <span className="stat-item">
                        <b>Enterprise:</b> <i>5k+</i>{" "}
                        <span className="discount-value">-30%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : selectedTab == pricingTabs.ResidentialProxies ? (
              <div>
                <div className="two-cols">
                  <div></div>
                  <div>
                    <div className="proxy_box">
                      <div className="inner_proxy_box">
                        <input
                          type="radio"
                          id="test2"
                          defaultChecked
                          name="radio-group"
                        />
                        <label htmlFor="test2">Rotating</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="no-of-proxies residential-gbs two-cols">
                  <div className="lable-box">
                    <label>Gigabytes:</label>
                  </div>
                  <div className="content-box">
                    <input
                      className={`proxy-input ${
                        resedentialInput < 1 && "border-red"
                      }`}
                      placeholder=""
                      value={resedentialInput}
                      onChange={handleChangeResidentialProxies}
                      type="number"
                      max={1000}
                    />
                    <br />
                    {resedentialInput < 1 && (
                      <span className="validation-error">
                        Minimum 1 proxy required
                      </span>
                    )}

                    <div className="stats">
                      <span className="stat-item">
                        <b>Starter:</b> <i>1 - 15 GB</i>{" "}
                      </span>
                      <span className="stat-item">
                        <b>Personal:</b> <i>16 - 49 GB</i>{" "}
                      </span>
                      <span className="stat-item">
                        <b>Consumer:</b> <i>50 - 99 GB</i>{" "}
                      </span>
                      <span className="stat-item">
                        <b>Professional:</b> <i>100 - 249 GB</i>{" "}
                      </span>
                      <span className="stat-item">
                        <b>Business:</b> <i>250 - 499 GB</i>{" "}
                      </span>
                      <span className="stat-item">
                        <b>Corporate:</b> <i>500 - 999 GB</i>{" "}
                      </span>
                      <span className="stat-item">
                        <b>Enterprise:</b> <i>1 - 4.9 TB</i>{" "}
                      </span>
                      <span className="stat-item">
                        <b>Custom:</b> <i>5TB +</i>{" "}
                      </span>
                      {/* <span className="stat-item">
                        <b>Personal-</b> <i>5 to 99</i>{" "}
                        <span className="discount-value">-15%</span>
                      </span>
                      <span className="stat-item">
                        <b>Corporate:</b> <i>5 to 99</i>{" "}
                        <span className="discount-value">-15%</span>
                      </span>
                      <span className="stat-item">
                        <b>Enterprise:</b> <i>5 to 99</i>{" "}
                        <span className="discount-value">-15%</span>
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="two-cols">
                  <div></div>
                  <div>
                    <div className="proxy_box">
                      <div className="inner_proxy_box">
                        <input
                          type="radio"
                          id="test1"
                          // value={ispProxyInput.mainType}
                          checked={
                            ispProxyInput.mainType === "dedicated"
                              ? true
                              : false
                          }
                          onChange={(e) => handleRadioChange(e, "dedicated")}
                          name="radio-group"
                        />
                        <label htmlFor="test1">Dedicated</label>
                      </div>
                      <div className="inner_proxy_box">
                        <input
                          type="radio"
                          id="test3"
                          name="radio-group"
                          checked={
                            ispProxyInput.mainType === "semiDedicated"
                              ? true
                              : false
                          }
                          onChange={(e) =>
                            handleRadioChange(e, "semiDedicated")
                          }
                        />
                        <label htmlFor="test3">Semi-Dedicated</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="countries-dropdown-wrapper two-cols">
                  <div className="lable-box">
                    <label>Select Country:</label>
                  </div>
                  <ReactFlagsSelect
                    className="countries-dropdown"
                    selected={
                      ispProxyInput.country &&
                      ispProxyInput.country.toUpperCase()
                    }
                    onSelect={onCountrySelect}
                    countries={countries}
                  />
                </div>
                <div className="price-slider-range two-cols">
                  <div className="lable-box">
                    <label>Length of Subscription:</label>
                  </div>
                  <div className="price-slider">
                    <Slider
                      min={10}
                      max={40}
                      step={10}
                      onChange={(e: any) => {
                        setIspProxyInput({
                          ...ispProxyInput,
                          length: LENGTHOFSUBSCRIPTION[e],
                        });
                        console.log({ length: LENGTHOFSUBSCRIPTION[e] });
                      }}
                      value={SHOWSUBSCRIPTION[ispProxyInput.length]}
                      marks={renderDCPSliderMarks()}
                      activeDotStyle={{
                        borderColor: "#fff",
                        backgroundColor: "#07b6bf",
                      }}
                      trackStyle={{
                        backgroundColor: "#07b6bf",
                        height: 6,
                      }}
                      railStyle={{
                        height: 6,
                      }}
                      dotStyle={{
                        height: 4,
                        width: 4,
                        bottom: "-2px",
                        display: "none",
                      }}
                      handleStyle={{
                        borderColor: "#07b6bf",
                        backgroundColor: "#07b6bf",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>

                <div className="no-of-proxies two-cols">
                  <div className="lable-box">
                    <label>Number of Proxies:</label>
                  </div>
                  <div className="content-box">
                    <input
                      className={`proxy-input ${
                        ispProxyValue < 5 && "border-red"
                      }`}
                      onChange={handleIspProxyInputChange}
                      value={ispProxyValue}
                      placeholder=""
                      type="number"
                    />
                    <br />
                    <span className="validation-error">
                      {ispProxyValue < 5 &&
                        ispProxyValue !== "" &&
                        "Minimum 5 proxies required"}
                    </span>

                    <div className="stats">
                      <span className="stat-item">
                        <b>Starter:</b> <i>5 to 99</i>{" "}
                      </span>
                      <span className="stat-item">
                        <b>Personal:</b> <i>100 to 999</i>{" "}
                        <span className="discount-value">-15%</span>
                      </span>
                      <span className="stat-item">
                        <b>Corporate:</b> <i>1k to 4,999</i>{" "}
                        <span className="discount-value">-25%</span>
                      </span>
                      <span className="stat-item">
                        <b>Enterprise:</b> <i>5k+</i>{" "}
                        <span className="discount-value">-30%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="right-col">
            <div className="chart-wrapper">
              <div className="chart-content">
                {(selectedTab == pricingTabs.DataCenterProxies &&
                  dspValue > 5000) ||
                (selectedTab == pricingTabs.ISPProxies &&
                  ispProxyValue > 5000) ||
                (selectedTab == pricingTabs.ResidentialProxies &&
                  resedentialInput > 5000) ? (
                  <div className="contact-us">
                    <p className="contact-us-text">
                      Get a custom plan for your business and save upto{" "}
                      <em>
                        <strong>30%</strong>
                      </em>{" "}
                      or more on orders of{" "}
                      <em>
                        <strong>5000+</strong>
                      </em>{" "}
                      {selectedTab == pricingTabs.ResidentialProxies
                        ? "GBs."
                        : "proxies."}
                    </p>
                    <a
                      href="https://rayobyte.com/contact-us/"
                      className="contact-us-btn"
                      target="_blank"
                    >
                      Contact Us
                    </a>
                  </div>
                ) : (
                  <>
                    <h1>
                      <sup>$</sup>
                      {selectedTab == pricingTabs.ResidentialProxies &&
                        Number(resedentialProxyCalculated).toFixed(2)}
                      {selectedTab == pricingTabs.ISPProxies &&
                        Number(ispCalculatedValue).toFixed(2)}

                      {selectedTab == pricingTabs.DataCenterProxies &&
                        Number(dspCalculatedValue).toFixed(2)}
                    </h1>
                    <hr />
                    {selectedTab === pricingTabs.ResidentialProxies ? (
                      <div>
                        <p>{resedentialInput} GB</p>
                      </div>
                    ) : (
                      <div className="chart-sub-content">
                        <div className="col-1">
                          <p>
                            {selectedTab == pricingTabs.ResidentialProxies && (
                              <>
                                {" "}
                                $
                                {resedentialProxyCalculated
                                  ? resedentialProxyCalculated /
                                    Number(resedentialInput)
                                  : "-"}
                                /GB
                              </>
                            )}
                            {selectedTab == pricingTabs.ISPProxies && (
                              <>
                                {" "}
                                $
                                {ispCalculatedValue
                                  ? Number(
                                      ispCalculatedValue /
                                        (Number(ispProxyValue) *
                                          MONTHVALUE[ispProxyInput.length])
                                    ).toFixed(2)
                                  : "-"}
                                /IP
                              </>
                            )}
                            {selectedTab == pricingTabs.DataCenterProxies && (
                              <>
                                {typeof dspCalculatedValue === "number" &&
                                dspCalculatedValue
                                  ? Number(
                                      dspCalculatedValue /
                                        (Number(dspValue) *
                                          MONTHVALUE[dspMonths])
                                    ).toFixed(2)
                                  : "--"}
                                /IP
                              </>
                            )}
                          </p>
                          <p>{dspValue} IPs</p>
                          <p>
                            $
                            {getPerMonthValue(
                              selectedTab === pricingTabs.DataCenterProxies
                                ? "dataCenter"
                                : selectedTab === pricingTabs.ISPProxies
                                ? "isp"
                                : "dataCenter"
                            )}
                            /Mo
                          </p>
                        </div>
                        <div className="col-2">
                          <p className="radio-label">
                            {selectedTab == pricingTabs.DataCenterProxies
                              ? dspRadio
                              : selectedTab == pricingTabs.ISPProxies
                              ? ispProxyInput.mainType
                              : ispProxyInput.mainType}
                          </p>
                          <p>{renderMonthsForChart()} </p>
                          {selectedTab !== pricingTabs.ResidentialProxies && (
                            <p className="country-name">
                              {selectedTab == pricingTabs.DataCenterProxies
                                ? dcpCountry
                                : ispProxyInput.country}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
              {window !== undefined && (
                <div id="chart">
                  <ReactApexChart
                    width={isMobile ? 380 : isTablet ? 600 : 500}
                    height={isMobile ? 380 : isTablet ? 600 : 500}
                    options={chartOptions}
                    series={[
                      selectedTab == pricingTabs.ResidentialProxies
                        ? resedentialProxyCalculated * 0.1
                        : selectedTab == pricingTabs.ISPProxies
                        ? renderISPProxiesChartValue()
                        : renderDCPChartValue(),
                    ]}
                    type="radialBar"
                  />
                </div>
              )}
              {((selectedTab == pricingTabs.DataCenterProxies &&
                dspValue <= 5000) ||
                (selectedTab == pricingTabs.ISPProxies &&
                  ispProxyValue <= 5000) ||
                (selectedTab == pricingTabs.ResidentialProxies &&
                  resedentialInput <= 5000)) && (
                <a
                  href="https://dashboard.proxy.rayobyte.com/purchase?country=us&quantity=5&billingCycle=quarterly&_gl=1*116hez4*_ga*NzExNzM2NzMxLjE2NzYzMTA5NzQ.*_ga_TK61YTK3F7*MTY3NzUwNzk2Ni4yNS4xLjE2Nzc1MDg2MjQuNTYuMC4w"
                  target="_blank"
                  className="btn-primary-outline-hover"
                >
                  Buy Now
                </a>
              )}
            </div>
          </div>
        </div>

        {/* <div className="price_info">
          <p>
            * If you purchase multiple proxy packages, the total number of IPs
            may be eligible for custom discounts. For additional information,
            please email{" "}
            <a href="mailto:sales@dev2.rayobyte.com">sales@dev2.rayobyte.com</a>
            .*
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default PricingComponent;
